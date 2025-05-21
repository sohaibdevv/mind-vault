import React from "react";

type Variant = "primary" | "danger" | "default";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  default: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "default",
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;