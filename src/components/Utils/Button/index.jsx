import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex
         flex-row justify-center
          items-center 
          py-3 px-3 gap-2.5
           bg-color-blue 
            rounded-2xl w-28 h-8  text-white leading-tight 
        sm:w-full sm:py-3 sm:px-4 sm:text-sm 
        md:w-auto md:py-2 md:px-3 md:text-base 
        lg:py-4 lg:px-5 lg:text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
