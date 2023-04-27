import StyledComponentsRegistry from "@/registry";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <StyledComponentsRegistry>
          <>
            <Main />
            <NextScript />
          </>
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}
