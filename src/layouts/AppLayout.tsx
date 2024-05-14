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

      {/* <div className="grid grid-cols-[190px,800px,1fr] relative"> */}
      <div className="grid grid-cols-[190px,1fr,260px]">
        <div className="border-r">
          <Sidebar />
        </div>
        <div className="p-4 pb-0">
          <main>{children}</main>
        </div>
        <div className="">
          <Sidepanel />
        </div>
      </div>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Pandora",
};
