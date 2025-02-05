import * as React from "react";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CardContent = ({
  children = null,
  className = "",
  ...props
}: CardContentProps) => {
  return (
    <div
      className={`
        pt-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;