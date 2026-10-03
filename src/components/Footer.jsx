import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 border-t-4 border-suppliGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/">
              <img 
                src="logo.png" 
                alt="Supplimed Logo" 
                className="h-16 bg-white p-2 rounded-lg mb-6 border border-gray-700 hover:border-suppliGreen/50 transition-colors" 
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-medium text-gray-400">
              Where Need Connects Satisfaction[cite: 1]. Your trusted manufacturing partner for high-precision diagnostic equipment and medical lab-wares.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-suppliGreen transition-colors">About Us</Link></li>
              {/* Updated link from /catalogue to /products */}
              <li><Link to="/products" className="hover:text-suppliGreen transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-suppliGreen transition-colors">Contact & Support</Link></li>
              <li><Link to="#" className="hover:text-suppliGreen transition-colors">Quality Certificates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Top Categories</h4>
            <ul className="space-y-4 text-sm font-medium">
              {/* Updated links from /catalogue to /products */}
              <li><Link to="/products" className="hover:text-suppliGreen transition-colors">Vacuum Blood Tubes</Link></li>
              <li><Link to="/products" className="hover:text-suppliGreen transition-colors">Sample Transport</Link></li>
              <li><Link to="/products" className="hover:text-suppliGreen transition-colors">Histopathology</Link></li>
              <li><Link to="/products" className="hover:text-suppliGreen transition-colors">General Lab-wares</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-suppliGreen flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:sales@supplimed.in" className="hover:text-white transition-colors">sales@supplimed.in</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-suppliGreen flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Mathpurena, Raipur, Chhattisgarh, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
          <p>&copy; {new Date().getFullYear()} Supplimed. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;