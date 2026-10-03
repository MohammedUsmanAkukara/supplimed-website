import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { products } from '../data/catalogueData';

const Home = () => {
  const latestProducts = products.slice(0, 3);

  return (
    <div className="bg-white font-sans text-gray-800">
      <SEO 
        title="Premium Diagnostic Equipment" 
        description="Supplimed provides world-class diagnostic equipment, vacuum blood collection tubes, and modern lab wares with ISO certification." 
      />
      
      {/* 1. Clinical Hero Section with Precision Grid */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-20 lg:pt-28 lg:pb-32 border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="text-center lg:text-left">
              <span className="inline-block bg-white border border-gray-200 text-suppliGreen font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-6 shadow-sm">
                Diagnostic Equipment Manufacturer
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Precision Equipment for <br className="hidden lg:block" />
                <span className="text-suppliDarkGreen">Modern Diagnostics.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Elevate your laboratory's accuracy with our ISO-certified Vacuum Blood Collection Tubes, Sample Transport Coolers, and premium General Lab-wares[cite: 8, 11, 35].
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/catalogue" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-lg rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    Explore Catalogue
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-3.5 text-lg rounded-lg bg-white hover:bg-gray-50 transition-all">
                    Enquiry Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl shadow-lg p-2 bg-white border border-gray-100 overflow-hidden aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://placehold.co/800x800/f3f4f6/58595B?text=Lab+Equipment')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                {/* Clean Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-100 p-5 rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-suppliGreen/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-suppliDarkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">ISO 13485:2016</p>
                      <p className="text-sm text-gray-500 font-medium">Certified Devices[cite: 8]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Stats Section (Clean & Structured) */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">50+</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Premium Products</p>
            </div>
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">100%</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Quality Tested</p>
            </div>
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">24/7</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Expert Support</p>
            </div>
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">ISO</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Certified Mfd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick About Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-suppliGreen/5 rounded-2xl transform -translate-x-4 translate-y-4 -z-10"></div>
              <img src="https://placehold.co/800x600/f3f4f6/58595B?text=State+of+the+Art+Facility" alt="Facility" className="rounded-2xl shadow-md border border-gray-100 w-full object-cover" />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                About <span className="text-suppliDarkGreen">Supplimed</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed font-medium">
                At Supplimed, we bridge the gap between healthcare needs and high-quality laboratory satisfaction[cite: 1]. We specialize in providing top-tier medical and diagnostic consumables that strictly adhere to global standards.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-suppliGreen/10 p-1 rounded">
                    <svg className="w-5 h-5 text-suppliDarkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">Advanced Spray Coat Technology for Vacuum Tubes[cite: 12]</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-suppliGreen/10 p-1 rounded">
                    <svg className="w-5 h-5 text-suppliDarkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">Leak-proof and Sterilized General Lab-wares[cite: 32, 38]</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-suppliGreen/10 p-1 rounded">
                    <svg className="w-5 h-5 text-suppliDarkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">Innovative Sample Transport Solutions (Hemo Porter)[cite: 35]</span>
                </li>
              </ul>
              <Link to="/about">
                <Button variant="outline" className="px-6 py-2.5 font-bold rounded-lg hover:bg-gray-50">Read Our Full Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Categories (Structural Cards) */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Discover Our Range</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">Comprehensive diagnostic solutions engineered for accurate results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Vacuum Tubes", desc: "HemoVac Plus systems", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Sample Transport", desc: "Cool cases & containers", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { title: "General Lab-wares", desc: "Centrifuge tubes & pipettes", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Histopathology", desc: "Cassettes & rings", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }
            ].map((cat, idx) => (
              <Link key={idx} to="/catalogue" className="bg-white rounded-xl p-8 border border-gray-200 border-b-4 border-b-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-b-suppliGreen transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-5 text-suppliDarkGreen border border-gray-100">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cat.icon}></path></svg>
                </div>
                <h3 className="font-extrabold text-xl text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Latest Products Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Latest Products</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-medium">Discover our newly added, high-precision laboratory consumables.</p>
            </div>
            <Link to="/catalogue">
              <Button variant="outline" className="hidden sm:block rounded-lg font-bold">View All Products</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/catalogue">
              <Button variant="outline" className="w-full rounded-lg font-bold">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Clean Gallery Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Equipment in Action</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto font-medium">A glimpse of our premium products and manufacturing excellence.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden border border-gray-200 group">
              <img src="https://placehold.co/800x800/f3f4f6/58595B?text=Lab+Environment" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 group">
              <img src="https://placehold.co/400x400/f3f4f6/939598?text=HemoVac+Plus" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 group">
              <img src="https://placehold.co/400x400/f3f4f6/A3C065?text=Centrifuge" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden border border-gray-200 group">
              <img src="https://placehold.co/800x400/f3f4f6/58595B?text=Sample+Transport" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clinical CTA Section with Radial Glow */}
      <section className="relative bg-gray-900 py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-suppliGreen/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to equip your laboratory?
          </h2>
          <p className="text-gray-300 mb-10 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Get competitive pricing and fast delivery on all your diagnostic equipment needs. Partner with Supplimed today.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="px-10 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-suppliGreen/30 hover:-translate-y-0.5 transition-all">
              Enquiry Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;