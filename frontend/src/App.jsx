import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center flex-col py-20">
        <h1 className="text-3xl font-bold text-gray-800">
          ¡Proyecto limpio y listo! 🚀
        </h1>
        <h2 className="text-2xl font-bold text-gray-800">a topeeeeee</h2>
      </div>
      <Footer />
    </div>
  )
}

export default App
