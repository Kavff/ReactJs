import  Header  from "./components/Header/Header";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import ContainerTitle from "./components/ContainerTitle/ContainerTitle";
import "./App.scss";
import ItemList from "./components/ItemList/ItemList";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <div className="divMain">
        <ContainerTitle title="Our Most Popular Models"></ContainerTitle>
       <ItemList/>
      </div>
    </ThemeProvider>
  );
  }

export default App;
