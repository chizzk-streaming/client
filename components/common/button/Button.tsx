import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="relative h-[30px] rounded-lg border border-gray px-[13px] text-xs text-customGray-300 hover:bg-customGray-hover">
      {children}
    </button>
  );
};

export default Button;
