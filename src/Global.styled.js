import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box
  }

  body {
    font-family: "Lato";
  }
`;

export default GlobalStyles;
