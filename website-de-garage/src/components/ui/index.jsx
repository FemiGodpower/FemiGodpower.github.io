import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'default', 
  type = 'button', 
  ...props 
}) => {
  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`rounded-lg border bg-white text-gray-950 shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Input = ({ className = '', type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export const Textarea = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};