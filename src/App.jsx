import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.styled";
import GlobalStyles from "./Global.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Hello</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
