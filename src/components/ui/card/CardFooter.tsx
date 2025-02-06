import * as React from "react";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CardFooter = ({
  children = null,
  className = "",
  ...props
}: CardFooterProps) => {
  return (
    <div
      className={`
        pb-4
        border-b
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardFooter;