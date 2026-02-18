React Flow visualizer

Instrucciones rápidas:

1. Abrir una terminal en [assets/reactflow](assets/reactflow)
2. Instalar dependencias: `npm install`
3. Lanzar en modo desarrollo: `npm run dev`

La app usa Vite y Tailwind v4; el visualizador carga el JSON en [assets/reactflow/src/data/graph.json](assets/reactflow/src/data/graph.json).

Siguientes mejoras posibles:
- Generar `graph.json` automáticamente leyendo las entidades y controladores de Symfony.
- Mapear rutas y relaciones reales usando un script PHP que exporte la estructura.

Notas Tailwind:
- Configuración: [assets/reactflow/tailwind.config.cjs](assets/reactflow/tailwind.config.cjs)
- PostCSS: [assets/reactflow/postcss.config.cjs](assets/reactflow/postcss.config.cjs)

Script de exportación automática:

1. He añadido `scripts/export_graph.php` que genera `assets/reactflow/src/data/graph.json` a partir de los ficheros en `src/Controller` y `src/Entity`.
2. Ejecuta:

```bash
php scripts/export_graph.php
```

Esto sobrescribe `assets/reactflow/src/data/graph.json` con un mapeo básico (coincidencia por nombre entre `XController` y `X` entidad).

Además, el exportador ahora intenta extraer metadatos adicionales (heurísticos):
- Rutas: parsea `config/routes.yaml` buscando `controller:` o `_controller:` y genera nodos `route-*` conectados al controlador correspondiente cuando es posible.
- Asociaciones entre entidades: analiza los ficheros en `src/Entity` buscando `targetEntity`, atributos Doctrine (`ManyToOne`, `OneToMany`, etc.) y propiedades tipadas; crea aristas entre entidades cuando detecta referencias.

Limitaciones:
- El análisis es heurístico y no reemplaza análisis estático completo ni el metadata de Doctrine. Para relaciones 100% fiables se recomienda exportar metadata desde Doctrine o usar Reflection en el kernel de Symfony.

