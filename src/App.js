import { Header } from "./components/Header/Header";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
