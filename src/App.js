import Container from "./components/styles/Container.style";
import GlobalStyles from "./components/styles/GlobalStyles.style";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
