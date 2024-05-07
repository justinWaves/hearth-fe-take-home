import React from "react";
import "./Button.scss";
import { joinClassNames } from "../../utils/join-class-names";
import { bemElement } from "../../utils/bem-class-names";

const baseClassName = "button";

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
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={joinClassNames(baseClassName, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
