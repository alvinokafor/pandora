import Head from "next/head";
import { usePathname } from "next/navigation";
import { Sidebar, Sidepanel } from "@/components/partials";

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

      <div className="grid grid-cols-6">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-4 p-4 pb-0">
          <main>{children}</main>
        </div>
        <div>
          <Sidepanel />
        </div>
      </div>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Pandora",
};
