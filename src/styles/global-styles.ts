import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "NanumSquare", sans-serif;
  }
  .normal {
    font-weight: 400;
  }
  .bold {
    font-weight: 700;
  }
  .bolder {
    font-weight: 800;
  }
  .light {
    font-weight: 300;
  }

  html,
  body {
    position: fixed;
    padding: 0;
    box-sizing: border-box;

    overflow: hidden;
    overscroll-behavior-y: none;
    margin: 0;
  }

`;

export default GlobalStyles;