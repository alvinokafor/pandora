import React from "react";

type AuthPagesProps = {
  children: React.ReactNode;
};

export default function AuthPagesLayout({ children }: AuthPagesProps) {
  return (
    <section className="mt-24 flex justify-center items-center px-4">
      <div>{children}</div>
    </section>
  );
}
