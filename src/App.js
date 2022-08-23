import { Header } from "./components/Header/Header";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <div className="divCards">
        <ItemListContainer></ItemListContainer>
        <ItemListContainer></ItemListContainer>
        <ItemListContainer></ItemListContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
