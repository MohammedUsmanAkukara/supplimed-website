import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-2 rounded-md font-medium transition-all duration-300 ease-in-out focus:outline-none";
  const variants = {
    primary: "bg-suppliGreen text-white hover:bg-suppliDarkGreen shadow-md hover:shadow-lg",
    outline: "border-2 border-suppliGrey text-suppliDarkGrey hover:border-suppliGreen hover:text-suppliGreen",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;