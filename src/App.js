import { StyledButton } from "./components/styles/Button.style";
import Container from "./components/styles/Container.style";
import { GlobalStyles } from "./components/styles/GlobalStyles.style";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "lightblue",
    body: "#000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <StyledButton
          buttonLabel="click me"
          backgroundColor="red"
        ></StyledButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
