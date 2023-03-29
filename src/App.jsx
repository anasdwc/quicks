import styled, { ThemeProvider } from "styled-components";
import { theme } from "./Theme.styled";
import GlobalStyles from "./Global.styled";
import Sidebar from "./components/Sidebar/Sidebar";
import { GridContainer } from "./styles/Container.styled";
import Body from "./components/Body/Body";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GridContainer>
          <Sidebar />
          <Body />
        </GridContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
