import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const Button = ({
  children = null,
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        px-4 py-2 rounded-md border
        ${variant === "default" ? "bg-primary text-primary-foreground" : ""}
        ${variant === "destructive" ? "bg-destructive text-destructive-foreground" : ""}
        ${variant === "outline" ? "border-input" : ""}
        ${variant === "secondary" ? "bg-secondary text-secondary-foreground" : ""}
        ${variant === "ghost" ? "bg-transparent" : ""}
        ${variant === "link" ? "bg-transparent border-none" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;