import styled, { ThemeProvider } from "styled-components";
import { theme } from "./Theme.styled";
import GlobalStyles from "./Global.styled";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container, GridContainer } from "./styles/Container.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GridContainer>
          <Sidebar />
          <Container borderLeft />
        </GridContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
