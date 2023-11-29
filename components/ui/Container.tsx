import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 md:px-8 lg:px-8">
      {children}
    </div>
  );
}
