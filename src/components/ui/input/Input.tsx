import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

export const Input = ({
  placeholder = "",
  className = "",
  ...props
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`
        w-full
        rounded-md
        border
        px-3 py-2
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;