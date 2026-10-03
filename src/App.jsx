import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // Naya ScrollToTop component import kiya

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Router ke theek andar ScrollToTop laga diya */}
        <ScrollToTop /> 
        
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800 selection:bg-suppliGreen selection:text-white">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;