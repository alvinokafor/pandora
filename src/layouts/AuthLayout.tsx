import Head from "next/head";
import { usePathname } from "next/navigation";
import { NavBar } from "@/components/partials";
interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

import React from "react";

export default function AuthLayout({ title, children }: ILayoutProps) {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="any"
        />
      </Head>

      <NavBar />
      <main className="mt-24 flex justify-center items-center px-4">
        {children}
      </main>
    </>
  );
}

AuthLayout.defaultProps = {
  title: "Pandora",
};
