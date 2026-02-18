import React from 'react'
import FlowVisualizer from './FlowVisualizer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Mapa del proyecto (React Flow)</h2>
        </header>
        <main>
          <FlowVisualizer />
        </main>
      </div>
    </div>
  )
}
