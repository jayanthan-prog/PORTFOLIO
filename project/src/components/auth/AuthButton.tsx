import React from 'react';
import { Loader2 } from 'lucide-react';

interface AuthButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'google';
}

export default function AuthButton({ 
  children, 
  isLoading, 
  onClick, 
  type = 'button',
  variant = 'primary' 
}: AuthButtonProps) {
  const baseStyles = "group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  const variantStyles = {
    primary: "border-transparent text-white bg-indigo-600 hover:bg-indigo-700",
    google: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : children}
    </button>
  );
}