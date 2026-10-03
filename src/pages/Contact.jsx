import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'vacuum-tubes',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Form Validation Logic
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter your message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Yahan API call aayega backend ke liye
      console.log("Form Data Submitted:", formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '', email: '', phone: '', company: '', interest: 'vacuum-tubes', message: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      <SEO 
        title="Contact Us | Enquiry & Support" 
        description="Get in touch with Supplimed for bulk orders, custom diagnostic equipment manufacturing, and laboratory consumable supplies." 
      />

      {/* 1. Clinical Page Header */}
      <section className="relative bg-gray-50 pt-16 pb-20 px-4 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-white border border-gray-200 text-suppliGreen font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Partner with <span className="text-suppliDarkGreen">Supplimed.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg font-medium">
            Contact our specialized team for bulk orders, wholesale pricing, or technical inquiries regarding our ISO-certified medical consumables.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Section (Form + Info + Map) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Contact Information</h2>
              <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                Reach out to us directly through our official channels. Our support team typically responds within 24 hours.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-suppliDarkGreen shadow-sm shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Corporate Office</h4>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    MB Plastic Industries<br />
                    B75, Sector 83, Noida,<br />
                    UP 201305 INDIA[cite: 61]
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-suppliDarkGreen shadow-sm shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Email Support</h4>
                  <a href="mailto:sales@supplimed.in" className="text-suppliDarkGreen hover:text-suppliGreen font-semibold transition-colors">sales@supplimed.in</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-suppliDarkGreen shadow-sm shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Sales Inquiry</h4>
                  <p className="text-gray-600 font-medium">+91 (123) 456-7890</p>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe (Demo) */}
            <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-8">
              <iframe 
                title="Supplimed Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x390d9d020d0f7aeb%3A0x2f9cb79e7e0b57e7!2sSector%2083%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 sm:p-10 border-t-4 border-t-suppliGreen">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Send an Enquiry</h3>
              <p className="text-gray-500 font-medium mb-8">Fill out the form below and our sales representative will contact you shortly.</p>

              {isSubmitted ? (
                <div className="bg-suppliGreen/10 border border-suppliGreen/30 rounded-xl p-8 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-suppliGreen text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 font-medium">Your enquiry has been successfully submitted. We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-suppliGreen focus:ring-suppliGreen/20'} bg-gray-50 focus:bg-white outline-none transition-all font-medium`}
                        placeholder="Dr. John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-suppliGreen focus:ring-suppliGreen/20'} bg-gray-50 focus:bg-white outline-none transition-all font-medium`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-suppliGreen focus:ring-suppliGreen/20'} bg-gray-50 focus:bg-white outline-none transition-all font-medium`}
                        placeholder="john@hospital.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.email}</p>}
                    </div>

                    {/* Company/Hospital */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Hospital / Clinic Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:border-suppliGreen focus:ring-suppliGreen/20 outline-none transition-all font-medium"
                        placeholder="Apollo Labs"
                      />
                    </div>
                  </div>

                  {/* Interested In (Dropdown) */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Interested In *</label>
                    <div className="relative">
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full appearance-none px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:border-suppliGreen focus:ring-suppliGreen/20 outline-none transition-all font-medium cursor-pointer"
                      >
                        <option value="vacuum-tubes">HemoVac Plus Vacuum Tubes</option>
                        <option value="non-vacuum-tubes">Hemo Tube Non-Vacuum Tubes</option>
                        <option value="sample-transport">Sample Transport (Hemo Porter)</option>
                        <option value="lab-wares">General Lab-wares</option>
                        <option value="histopathology">Histopathology Consumables</option>
                        <option value="other">Other Inquiry / Bulk Orders</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Your Message *</label>
                    <textarea 
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-suppliGreen focus:ring-suppliGreen/20'} bg-gray-50 focus:bg-white outline-none transition-all font-medium resize-none`}
                      placeholder="Please specify your requirements, quantities, or custom manufacturing needs..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-suppliGreen/30 hover:-translate-y-0.5 transition-all">
                    Submit Enquiry
                  </Button>
                  
                  <p className="text-xs text-gray-400 font-medium text-center mt-4">
                    By submitting this form, you agree to our privacy policy. Your data will be kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;