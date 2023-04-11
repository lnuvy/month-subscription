import "@/styles/globals.css";
import "@/styles/theme.css";
import type { AppProps } from "next/app";
import "@unocss/reset/normalize.css";
import "uno.css";
import TabContextProvider from "@/context/tab-context";
import { ReactElement } from "react";
import { NextPage } from "next";

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
      <TabContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </TabContextProvider>
    </>
  );
}
