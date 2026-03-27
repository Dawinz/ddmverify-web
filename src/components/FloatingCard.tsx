import { ReactNode, CSSProperties } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const FloatingCard = ({ children, className = "", style }: FloatingCardProps) => {
  return (
    <div
      className={`rounded-xl bg-card px-4 py-3 shadow-md border border-border ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingCard;
