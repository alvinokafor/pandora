import Head from "next/head";
import { usePathname } from "next/navigation";
import { NavBar } from "@/components/partials";
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
      </Head>

      {pathname && pathname.includes("auth") && <NavBar />}
      <main>{children}</main>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Pandora",
};
