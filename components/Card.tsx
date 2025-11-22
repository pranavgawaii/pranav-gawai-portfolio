import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        group relative bg-white dark:bg-[#111] border border-neutral-200 dark:border-[#222] rounded-xl p-6 
        hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;