<?php
/**
 * Export a simple graph.json for the React Flow visualizer.
 * Scans src/Controller and src/Entity for PHP files and maps controllers
 * to entities when the controller name (without "Controller") matches an entity name.
 */

$projectRoot = realpath(__DIR__ . '/..');
$controllerDir = $projectRoot . '/src/Controller';
$entityDir = $projectRoot . '/src/Entity';
$outFile = $projectRoot . '/assets/reactflow/src/data/graph.json';

$routesFile = $projectRoot . '/config/routes.yaml';

function listPhpFiles($dir) {
    $result = [];
    if (!is_dir($dir)) return $result;
    foreach (scandir($dir) as $f) {
        if ($f === '.' || $f === '..' || $f === '.gitignore') continue;
        $path = $dir . '/' . $f;
        if (is_file($path) && preg_match('/\.php$/i', $f)) {
            $result[] = pathinfo($f, PATHINFO_FILENAME);
        }
    }
    return $result;
}

$controllers = listPhpFiles($controllerDir);
$entities = listPhpFiles($entityDir);

$nodes = [];
$edges = [];

// Controllers on the left
foreach ($controllers as $i => $c) {
    $nodes[] = [
        'id' => 'c-' . $c,
        'position' => ['x' => 0, 'y' => $i * 110],
        'data' => ['label' => $c],
        'style' => ['width' => 200]
    ];
}

// Entities on the right
foreach ($entities as $i => $e) {
    $nodes[] = [
        'id' => 'e-' . $e,
        'position' => ['x' => 420, 'y' => $i * 110],
        'data' => ['label' => $e],
        'style' => ['width' => 180]
    ];
}

// Create edges by matching controller base name to entity name
foreach ($controllers as $c) {
    $base = preg_replace('/Controller$/i', '', $c);
    foreach ($entities as $e) {
        if (strcasecmp($base, $e) === 0) {
            $edges[] = [
                'id' => 'edge-' . $c . '-' . $e,
                'source' => 'c-' . $c,
                'target' => 'e-' . $e
            ];
        }
    }
}

// --- Parse routes.yaml to add route nodes and edges to controllers (heuristic)
if (is_file($routesFile)) {
    $routes = file_get_contents($routesFile);
    // find lines like: controller: App\\Controller\\XController::method or _controller: 'App\\Controller\\XController::method'
    if (preg_match_all('/(?:controller|_controller)\s*:\s*["\']?([^\s"\']+)["\']?/i', $routes, $m)) {
        foreach ($m[1] as $i => $controllerString) {
            // try extract class name and route name
            $routeId = 'route-' . ($i+1);
            $routeLabel = $controllerString;
            // create route node
            $nodes[] = [
                'id' => $routeId,
                'position' => ['x' => 210, 'y' => ($i * 80) + 20],
                'data' => ['label' => $routeLabel],
                'style' => ['width' => 260]
            ];

            // find controller class portion
            if (preg_match('/([A-Za-z0-9_\\\\]+Controller)::/', $controllerString, $c)) {
                $classParts = explode('\\\\', $c[1]);
                $short = end($classParts);
                // connect route -> controller node if exists
                $controllerNodeId = 'c-' . $short;
                // find node existence
                $found = false;
                foreach ($nodes as $n) { if ($n['id'] === $controllerNodeId) { $found = true; break; } }
                if ($found) {
                    $edges[] = [
                        'id' => 'edge-' . $routeId . '-' . $controllerNodeId,
                        'source' => $routeId,
                        'target' => $controllerNodeId
                    ];
                }
            }
        }
    }
}

// --- Parse entity files for Doctrine-style associations (heuristic)
if (is_dir($entityDir)) {
    foreach (scandir($entityDir) as $f) {
        if ($f === '.' || $f === '..' || $f === '.gitignore') continue;
        $path = $entityDir . '/' . $f;
        if (!is_file($path)) continue;
        $content = file_get_contents($path);
        // get entity class name
        if (!preg_match('/class\s+([A-Za-z0-9_]+)\b/', $content, $classM)) continue;
        $thisEntity = $classM[1];

        // search for targetEntity="X" or targetEntity: X::class or ManyToOne\(.*targetEntity:\s*X::class
        if (preg_match_all('/targetEntity\s*=\s*"?\\?([A-Za-z0-9_\\\\]+)"?/i', $content, $tm)) {
            foreach ($tm[1] as $targetFull) {
                $parts = explode('\\\\', $targetFull);
                $target = end($parts);
                // add edge thisEntity -> target
                $edges[] = [
                    'id' => 'edge-entity-' . $thisEntity . '-' . $target,
                    'source' => 'e-' . $thisEntity,
                    'target' => 'e-' . $target,
                    'label' => 'assoc'
                ];
            }
        }

        // attribute style: ManyToOne(targetEntity: Plato::class)
        if (preg_match_all('/(?:ManyToOne|OneToMany|ManyToMany|OneToOne)\([^)]*targetEntity\s*:\s*([A-Za-z0-9_\\\\]+)::class/i', $content, $am)) {
            foreach ($am[1] as $targetFull) {
                $parts = explode('\\\\', $targetFull);
                $target = end($parts);
                $edges[] = [
                    'id' => 'edge-entity-attr-' . $thisEntity . '-' . $target,
                    'source' => 'e-' . $thisEntity,
                    'target' => 'e-' . $target,
                    'label' => 'assoc'
                ];
            }
        }

        // typed property heuristic: private ?Plato $plato; or private Plato $plato;
        if (preg_match_all('/private\s+\??([A-Z][A-Za-z0-9_]+)\s+\$[a-zA-Z0-9_]+\s*;/m', $content, $pm)) {
            foreach ($pm[1] as $target) {
                // ignore scalar types
                if (in_array(strtolower($target), ['string','int','float','bool','array','iterable','collection'])) continue;
                $edges[] = [
                    'id' => 'edge-entity-typed-' . $thisEntity . '-' . $target,
                    'source' => 'e-' . $thisEntity,
                    'target' => 'e-' . $target,
                    'label' => 'typed'
                ];
            }
        }
    }
}

$graph = ['nodes' => $nodes, 'edges' => $edges];

if (!is_dir(dirname($outFile))) {
    mkdir(dirname($outFile), 0755, true);
}

file_put_contents($outFile, json_encode($graph, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

echo "Wrote graph with " . count($nodes) . " nodes and " . count($edges) . " edges to: $outFile\n";
