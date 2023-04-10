import "@/styles/globals.css";
import "@/styles/theme.css";
import type { AppProps } from "next/app";
import "@unocss/reset/normalize.css";
import "uno.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
