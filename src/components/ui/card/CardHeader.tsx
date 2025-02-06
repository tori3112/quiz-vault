import * as React from "react";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CardHeader = ({
  children = null,
  className = "",
  ...props
}: CardHeaderProps) => {
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

export default CardHeader;