import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CartPanel from './components/CartPanel';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/20 dark:from-neutral-950 dark:to-primary-950/20 transition-colors duration-300">
          <Header />
          <CartPanel />
          <main className="pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
