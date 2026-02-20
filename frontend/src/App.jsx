import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido/:id" element={<OrderDetails />} />
          <Route path="/pedido" element={<OrderDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
