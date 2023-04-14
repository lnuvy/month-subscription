import TabContextProvider from "@/context/tab-context";
import ThemeContextProvider from "@/context/theme-context";
import GlobalStyles from "@/styles/global-styles";
import "@/styles/theme.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => JSX.Element | JSX.Element[];
};

type AppPropsWithLayout<P = unknown> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{
  dehydratedState?: unknown;
}>) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <TabContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </TabContextProvider>
      </ThemeContextProvider>
    </>
  );
}
