import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="hover:bg-customGray-hover relative h-[30px] rounded-lg border border-gray px-2.5 py-1.5 text-xs text-customGray-300">
      {children}
    </button>
  );
};

export default Button;
