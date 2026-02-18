import React, { useMemo, useState, useCallback } from 'react'
import ReactFlow, { Background, Controls, MiniMap, applyNodeChanges, applyEdgeChanges } from 'reactflow'
import dagre from 'dagre'
import 'reactflow/dist/style.css'
import graph from './data/graph.json'

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const NODE_WIDTH = 220
const NODE_HEIGHT = 40

function getLayoutedElements(nodes, edges, direction = 'LR') {
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })
  const gNodes = nodes.map((n) => ({ id: n.id, width: n.width || NODE_WIDTH, height: n.height || NODE_HEIGHT }))
  gNodes.forEach((n) => dagreGraph.setNode(n.id, { width: n.width, height: n.height }))
  edges.forEach((e) => dagreGraph.setEdge(e.source, e.target))

  dagre.layout(dagreGraph)

  const layoutedNodes = nodes.map((node) => {
    const n = dagreGraph.node(node.id)
    if (n) {
      node.position = {
        x: n.x - NODE_WIDTH / 2,
        y: n.y - NODE_HEIGHT / 2,
      }
    }
    return node
  })

  return { nodes: layoutedNodes, edges }
}

export default function FlowVisualizer() {
  const [showRoutes, setShowRoutes] = useState(false)

  const baseNodes = useMemo(() => (graph.nodes || []).map((n) => {
    // style nodes by type (entity/controller/route) if set, otherwise fallback to id prefix
    const type = n.type || (n.id.startsWith('e-') ? 'entity' : n.id.startsWith('c-') ? 'controller' : n.id.startsWith('route-') ? 'route' : 'other')
    const label = (n.data && n.data.label) ? n.data.label : n.id

    // emoji/icon per type
    const icon = type === 'entity' ? '📦' : type === 'controller' ? '⚙️' : type === 'route' ? '🔗' : '•'

    // adaptive width based on label length (keeps dagre layout accurate by providing width)
    const calcWidth = (txt) => Math.min(360, Math.max(140, txt.length * 8 + 48))
    const width = calcWidth(label)
    const height = NODE_HEIGHT + Math.max(0, Math.floor(label.length / 40) * 10)

    const bg = type === 'entity' ? '#ecfdf5' : type === 'controller' ? '#eef2ff' : type === 'route' ? '#fff7ed' : '#ffffff'
    const borderLeft = type === 'entity' ? '#10b981' : type === 'controller' ? '#6366f1' : type === 'route' ? '#f97316' : '#6b7280'

    const style = {
      padding: '8px 10px',
      borderRadius: 8,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      fontSize: 13,
      background: bg,
      color: '#0f172a',
      borderLeft: `4px solid ${borderLeft}`,
    }

    const displayLabel = `${icon} ${label}`

    return {
      ...n,
      data: { ...n.data, label: displayLabel },
      style,
      width,
      height,
      type,
    }
  }), [])

  const baseEdges = useMemo(() => graph.edges || [], [])

  const filtered = useMemo(() => {
    if (showRoutes) return { nodes: baseNodes, edges: baseEdges }
    const nodes = baseNodes.filter((n) => !(n.type === 'route' || n.id.startsWith('route-')))
    const nodeIds = new Set(nodes.map((n) => n.id))
    const edges = baseEdges.filter((e) => nodeIds.has(e.source) && nodeIds.has(e.target))
    return { nodes, edges }
  }, [showRoutes, baseNodes, baseEdges])

  const layouted = useMemo(() => getLayoutedElements(filtered.nodes.map(n => ({ ...n })), filtered.edges.map(e => ({ ...e })), 'LR'), [filtered])

  const [rfNodes, setRfNodes] = React.useState(layouted.nodes)
  const [rfEdges, setRfEdges] = React.useState(layouted.edges)

  // update nodes/edges when layouted changes
  React.useEffect(() => {
    setRfNodes(layouted.nodes)
    setRfEdges(layouted.edges)
  }, [layouted])

  const onNodesChange = useCallback((changes) => setRfNodes((nds) => applyNodeChanges(changes, nds)), [])
  const onEdgesChange = useCallback((changes) => setRfEdges((eds) => applyEdgeChanges(changes, eds)), [])

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="space-x-2">
          <button
            className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
            onClick={() => setShowRoutes((s) => !s)}
          >
            {showRoutes ? 'Ocultar rutas' : 'Mostrar rutas'}
          </button>
          <span className="text-sm text-gray-600">Toggle routes column</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-xs text-gray-600">Legend:</div>
          <div className="text-xs flex items-center"><span className="inline-block w-3 h-3 bg-green-100 border-l-4 border-green-500 mr-2"/> Entity</div>
          <div className="text-xs flex items-center"><span className="inline-block w-3 h-3 bg-indigo-100 border-l-4 border-indigo-500 mr-2"/> Controller</div>
          <div className="text-xs flex items-center"><span className="inline-block w-3 h-3 bg-orange-100 border-l-4 border-orange-400 mr-2"/> Route</div>
        </div>
      </div>

      <div className="w-full h-[76vh] border border-gray-200 rounded bg-white shadow-sm">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          fitView
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodesDraggable={false}
          nodesConnectable={false}
        >
          <MiniMap
            nodeColor={(node) => {
              const t = node.type || node.id
              if ((t || '').toString().includes('entity')) return '#10b981'
              if ((t || '').toString().includes('controller')) return '#6366f1'
              if ((t || '').toString().includes('route')) return '#f97316'
              return '#9ca3af'
            }}
            maskColor="rgba(0,0,0,0.15)"
            zoomable
          />
          <Background gap={16} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  )
}
