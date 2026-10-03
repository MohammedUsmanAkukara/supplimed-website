import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What quality standards does Supplimed follow?",
      answer: "We strictly adhere to international quality standards and are certified with ISO 9001:2015 and ISO 13485:2016 for medical devices[cite: 8]."
    },
    {
      question: "Are your vacuum blood collection tubes compatible with automated analyzers?",
      answer: "Yes, our HemoVac Plus tubes are designed to be fully compatible with major automated systems and probes used in modern laboratories[cite: 12, 14]."
    },
    {
      question: "Do you offer custom manufacturing or OEM services?",
      answer: "Absolutely. We have an in-house rapid prototyping facility for new product development[cite: 8]. We offer a high level of customization from product color to printing options[cite: 10]."
    },
    {
      question: "How do you ensure the safe transport of samples?",
      answer: "We offer innovative solutions like the Hemo Porter Cool Case with integrated cooling gels and temperature indicators to ensure sample stability during transport[cite: 35, 36]."
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
      <SEO 
        title="About Us | Professional Diagnostic Solutions"
        description="Supplimed provides high-quality, ISO-certified diagnostic equipment and medical consumables for laboratories worldwide." 
      />

      {/* 1. Clinical Hero Section with Precision Grid */}
      <section className="relative bg-gray-50 pt-20 pb-24 border-b border-gray-200 overflow-hidden">
        {/* Subtle Medical-style dot grid background for a technical/precise feel */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white border border-gray-200 text-suppliGreen font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Company Overview
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Advancing Diagnostics Through <br className="hidden md:block" /> 
            <span className="text-suppliDarkGreen">Precision and Quality.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            At Supplimed, we manufacture and distribute world-class laboratory consumables, empowering healthcare professionals to deliver accurate patient diagnoses[cite: 1].
          </p>
        </div>
      </section>

      {/* 2. Professional Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Clean, sterile image placeholder with a soft shadow */}
            <div className="absolute inset-0 bg-suppliGreen/5 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://placehold.co/800x600/f3f4f6/58595B?text=Modern+Laboratory+Facility" 
              alt="Medical Facility" 
              className="rounded-2xl shadow-lg border border-gray-100 w-full object-cover"
            />
            {/* Floating Trust Badge with Glass effect */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-suppliGreen/10 p-4 rounded-full text-suppliDarkGreen">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">ISO Certified</p>
                  <p className="text-sm text-gray-500 font-medium">13485:2016 Medical Devices[cite: 8]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-10 mt-10 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Core Mission</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We understand that behind every diagnostic sample is a human life. Our mission is to bridge the gap between technological advancement and everyday healthcare needs by providing flawless medical equipment[cite: 1].
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Powered by decades of polymer engineering expertise, we ensure that every HemoVac tube, sample container, and lab-ware meets the highest global standards of sterility and reliability[cite: 12].
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="border-l-4 border-suppliGreen pl-5">
                <h4 className="text-4xl font-extrabold text-gray-900 mb-1">100%</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Quality Assured</p>
              </div>
              <div className="border-l-4 border-suppliGreen pl-5">
                <h4 className="text-4xl font-extrabold text-gray-900 mb-1">50K+</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Sq.Ft Facility[cite: 8]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Infrastructure (Structural Hover Effects) */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">World-Class Infrastructure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our manufacturing capabilities are designed to deliver high-volume, defect-free medical consumables[cite: 9].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 border-b-4 border-b-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-b-suppliGreen transition-all duration-300">
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-suppliDarkGreen border border-gray-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">50,000 Sq. Ft. Facility</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Production spread over 50,000 square feet of space[cite: 8]. We maintain dedicated zones for moulding, assembly, and sterilization to ensure hygiene.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 border-b-4 border-b-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-b-suppliGreen transition-all duration-300">
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-suppliDarkGreen border border-gray-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Robotic Automation</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Advanced robotic lines from Nordson, USA and Jannome, Japan ensuring tight tolerances and completely automated assembly lines[cite: 8].
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 border-b-4 border-b-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-b-suppliGreen transition-all duration-300">
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-suppliDarkGreen border border-gray-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Prototyping</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                In-house facility for product designing and rapid prototyping[cite: 8]. Allowing us to continually innovate medical device designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Dedicated professionals committed to advancing laboratory technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Imran Bhota", role: "Managing Director" },
              { name: "John Doe", role: "Head of Operations" },
              { name: "Sarah Smith", role: "Quality Assurance Director" },
              { name: "Amit Patel", role: "National Sales Head" }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm bg-gray-100 group-hover:border-suppliGreen/20 transition-all duration-300">
                  <img src={`https://placehold.co/300x300/f8fafc/58595B?text=${member.name.split(' ')[0]}`} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-suppliDarkGreen font-semibold text-sm uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clients Showcase */}
      <section className="py-16 px-4 bg-gray-900 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Trusted by Leading Diagnostic Centers</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* Opacity based hover for a sleek dark theme look */}
            <img src="https://placehold.co/200x80/111827/ffffff?text=Lupin+Diagnostics" alt="Client 1" className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://placehold.co/200x80/111827/ffffff?text=Apollo+Labs" alt="Client 2" className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://placehold.co/200x80/111827/ffffff?text=Max+Healthcare" alt="Client 3" className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://placehold.co/200x80/111827/ffffff?text=SRL+Diagnostics" alt="Client 4" className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>

      {/* 6. Professional FAQs (Tinted active state) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-suppliGreen bg-suppliGreen/5 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-bold pr-4 ${openFaq === index ? 'text-suppliDarkGreen' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaq === index ? 'bg-suppliGreen text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Enhanced CTA with Radial Glow */}
      <section className="relative bg-gray-900 py-24 px-4 text-center overflow-hidden">
        {/* Soft radial gradient glow in the background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-suppliGreen/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Partner with Supplimed</h2>
          <p className="text-gray-300 mb-10 text-lg font-medium max-w-2xl mx-auto">
            Contact our specialized team for bulk orders, custom manufacturing, or inquiries about our ISO-certified diagnostic equipment range[cite: 8].
          </p>
          <Link to="/contact">
            <Button className="px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-suppliGreen/30 hover:-translate-y-0.5 transition-all" variant="primary">
              Enquiry Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;