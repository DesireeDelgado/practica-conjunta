import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import OrderDetails from './pages/OrderDetails';
import Cart from './pages/Cart';
import History from './pages/History';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido/:id" element={<OrderDetails />} />
          <Route path="/pedido" element={<OrderDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
