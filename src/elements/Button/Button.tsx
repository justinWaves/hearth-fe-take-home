import React from 'react';

interface IButtonProps {
  children: React.ReactNode; 
  onClick?: () => void; 
  type?: "button" | "submit" | "reset"; 
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={className} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;