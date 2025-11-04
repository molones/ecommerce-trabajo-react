import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;