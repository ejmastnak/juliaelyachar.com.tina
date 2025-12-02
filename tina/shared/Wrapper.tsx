import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Wrapper({ className, children }: Props) {
  return (
    <div className={`max-w-5xl mx-auto px-6 md:px-10 ${className ?? ""}`} >
      {children}
    </div>
  );
}
