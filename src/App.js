import { Header } from "./components/Header/Header";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ContainerTitle from "./components/ContainerTitle/ContainerTitle";
import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <div className="divMain">
        <ContainerTitle title= "Our Most Popular Models"></ContainerTitle>
        <div className="divCards">
          <ItemListContainer></ItemListContainer>
          <ItemListContainer></ItemListContainer>
          <ItemListContainer></ItemListContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
