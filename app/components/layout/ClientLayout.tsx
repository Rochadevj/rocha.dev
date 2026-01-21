import type { ReactNode } from "react";

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className={`transition-opacity duration-700 opacity-100`}>
        {children}
      </div>
    </>
  );
}
