import React from 'react';

const TextInput = ({ placeholder, value, onChange, type = "text", className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-suppliGreen focus:border-transparent outline-none transition-all text-suppliDarkGrey ${className}`}
    />
  );
};

export default TextInput;