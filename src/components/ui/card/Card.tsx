import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({
  children = null,
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        relative
        rounded-lg
        border
        bg-card
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;