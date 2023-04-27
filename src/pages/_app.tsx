import TabContextProvider from "@/context/tab-context";
import ThemeContextProvider from "@/context/theme-context";
import GlobalStyles from "@/styles/global-styles";
import "@/styles/theme.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

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
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeContextProvider>
            <GlobalStyles />
            <TabContextProvider>
              <Component {...pageProps} />
            </TabContextProvider>
          </ThemeContextProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
