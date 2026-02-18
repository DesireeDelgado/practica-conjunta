<?php
namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Routing\RouterInterface;

class ExportGraphCommand extends Command
{
    protected static $defaultName = 'app:export-graph';

    public function __construct(RouterInterface $router, EntityManagerInterface $em)
    {
        parent::__construct('app:export-graph');
        $this->router = $router;
        $this->em = $em;
    }

    protected function configure(): void
    {
        $this->setDescription('Export project graph (routes, controllers, entities, associations) to assets/reactflow/src/data/graph.json');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $projectDir = $this->getApplication()->getKernel()->getProjectDir();
        $outFile = $projectDir . '/assets/reactflow/src/data/graph.json';

        $nodes = [];
        $edges = [];

        // 1) Entities from Doctrine metadata
        $metadatas = $this->em->getMetadataFactory()->getAllMetadata();
        foreach ($metadatas as $i => $meta) {
            $short = (new \ReflectionClass($meta->getName()))->getShortName();
            $nodes[] = [
                'id' => 'e-' . $short,
                'position' => ['x' => 420, 'y' => $i * 110],
                'data' => ['label' => $short],
                'type' => 'entity',
            ];

            // associations
            if (!empty($meta->associationMappings)) {
                foreach ($meta->associationMappings as $assoc) {
                    $target = isset($assoc['targetEntity']) ? (new \ReflectionClass($assoc['targetEntity']))->getShortName() : null;
                    if ($target) {
                        $edges[] = [
                            'id' => 'edge-entity-' . $short . '-' . $target . '-' . uniqid(),
                            'source' => 'e-' . $short,
                            'target' => 'e-' . $target,
                            'label' => $assoc['type'] ?? 'assoc',
                        ];
                    }
                }
            }
        }

        // 2) Routes and controllers
        $routes = $this->router->getRouteCollection();
        $rIndex = 0;
        foreach ($routes->all() as $name => $route) {
            $defaults = $route->getDefaults();
            $controllerString = $defaults['_controller'] ?? null;
            $rId = 'route-' . $rIndex++;

            $nodes[] = [
                'id' => $rId,
                'position' => ['x' => 210, 'y' => $rIndex * 28],
                'data' => ['label' => $name . "\n" . $route->getPath()],
                'type' => 'route',
            ];

            if ($controllerString && preg_match('/([A-Za-z0-9_\\\\]+Controller)::/', $controllerString, $m)) {
                $class = $m[1];
                $parts = explode('\\\\', $class);
                $short = end($parts);
                // ensure controller node exists
                $cId = 'c-' . $short;
                $found = false;
                foreach ($nodes as $n) { if ($n['id'] === $cId) { $found = true; break; } }
                if (!$found) {
                    $nodes[] = [
                        'id' => $cId,
                        'position' => ['x' => 0, 'y' => count($nodes) * 40],
                        'data' => ['label' => $short],
                        'type' => 'controller',
                    ];
                }

                $edges[] = [
                    'id' => 'edge-route-' . $rId . '-' . $cId,
                    'source' => $rId,
                    'target' => $cId,
                    'label' => 'calls',
                ];
            }
        }

        // ensure output dir
        if (!is_dir(dirname($outFile))) {
            @mkdir(dirname($outFile), 0755, true);
        }

        $graph = ['nodes' => $nodes, 'edges' => $edges];
        file_put_contents($outFile, json_encode($graph, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $output->writeln(sprintf('Wrote graph with %d nodes and %d edges to: %s', count($nodes), count($edges), $outFile));

        return Command::SUCCESS;
    }
}
