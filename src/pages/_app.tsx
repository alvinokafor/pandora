import "@/styles/globals.css";
// import "@radix-ui/themes/styles.css";
// import "@/styles/theme-config.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";
import { UserProvider } from "@/contexts/UserContext";
import { Inter, Roboto } from "next/font/google";
// import { Roboto } from ""

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: Props) {
  return (
    <main className={`${inter.variable} font-sans`}>
      {/* // <main className={inter.className}> */}
      <QueryClientProvider client={queryClient}>
        {/* <Theme accentColor="green"> */}
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
        {/* </Theme> */}

        <Toaster richColors position="top-center" />
      </QueryClientProvider>
    </main>
  );
}
