import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import TextInput from '../components/TextInput';
import SelectField from '../components/SelectField';
import SEO from '../components/SEO';
import { products, categories } from '../data/catalogueData';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white font-sans text-gray-800">
      <SEO 
        title="Diagnostic Products & Consumables" 
        description="Browse our comprehensive range of diagnostic equipment including Vacuum Tubes, Hemo Porter Cool Case, and ISO-certified Lab-wares." 
        keywords="HemoVac Plus, Hemo Tube, Sample Transport, Lab Consumables"
      />
      
      {/* 1. Clinical Page Header with Precision Grid */}
      <section className="relative bg-gray-50 pt-16 pb-20 px-4 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block bg-white border border-gray-200 text-suppliGreen font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Our Inventory
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Diagnostic Products & <br className="hidden sm:block"/>
            <span className="text-suppliDarkGreen">Medical Consumables.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg font-medium">
            Explore our complete range of ISO-certified laboratory equipment engineered for precise and accurate results[cite: 8].
          </p>
        </div>
      </section>

      {/* 2. Main Products Section */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters Bar (Structured & Clean) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex-1">
              <TextInput 
                placeholder="Search equipment by name or keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="font-medium bg-white"
              />
            </div>
            <div className="w-full sm:w-72">
              <SelectField 
                options={categories}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="font-medium"
              />
            </div>
          </div>

          {/* Active Filter Summary (Optional UX enhancement) */}
          <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Equipment' : categories.find(c => c.value === selectedCategory)?.label}
            </h2>
            <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
            </span>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-500 font-medium">Try adjusting your search or category filter to find what you're looking for.</p>
              <Button 
                variant="outline" 
                className="mt-6 font-bold"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Bulk Order CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-200 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg className="w-8 h-8 text-suppliDarkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Looking for Bulk Supplies?</h2>
          <p className="text-gray-600 mb-8 text-lg font-medium">
            We provide custom packaging and competitive wholesale pricing for diagnostic centers and hospitals.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="px-10 py-3.5 text-lg font-bold rounded-lg shadow-md hover:-translate-y-0.5 transition-transform">
              Contact Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;