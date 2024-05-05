import Head from "next/head";
import { usePathname } from "next/navigation";
import { Sidebar } from "lucide-react";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function AppLayout({ title, children }: ILayoutProps) {
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

      <div>
        <Sidebar />

        <main>{children}</main>
      </div>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Pandora",
};
