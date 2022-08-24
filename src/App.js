import { Header } from "./components/Header/Header";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ContainerTitle from "./components/ContainerTitle/ContainerTitle";
import MasterRolexS from "../src/assets/rolexMasterS-Square280.webp";
import MasterRolexBatman from "../src/assets/rolexMasterBatman-Square280.webp";
import MasterRolexCoke from "../src/assets/Coke-Square280.webp";
import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <div className="divMain">
        <ContainerTitle title="Our Most Popular Models"></ContainerTitle>
        <div className="divCards">
          <ItemListContainer
            img={MasterRolexS}
            alt="Rolex"
            productTitle="Rolex GMT-Master II"
            description="This watch is NEW 2022 complete with box and papers, available now. IN STOCK

          Pictures of actual watch available with enquiry.
          
          NEW 2022
          
          IN STOCK READY TO SHIP"
            price="C$31,887"
          ></ItemListContainer>

          <ItemListContainer
            img={MasterRolexBatman}
            alt="Rolex"
            productTitle="Rolex GMT-Master II  Batman Mens Watch Box Papers"
            description="Rolex Oyster Perpetual Date GMT-Master II  Mens Watch. 
            40mm Stainless steel case. Bidirectional rotating black and blue ceramic bezel insert.
             Black dial with luminous steel hands and dot hour markers. Minute maker on the outer dial. 
             Date display at the 3 o'clock position. Stainless steel Oyster bracelet with stainless steel fold over clasp with safety. 
             Will fit up to a 7-inch wrist. Automatic self-winding movement. Circa: 2019. This watch comes with original Box and Papers."
            price="C$26,029"
          ></ItemListContainer>

          <ItemListContainer
            img={MasterRolexCoke}
            alt="Rolex"
            productTitle="Rolex GMT Master II Black Red Coke Bezel Steel Mens Watch 16710"
            description="Rolex GMT Master II Black Red Coke Bezel Steel Mens Watch 16710. Officially certified chronometer self-winding movement. 
            Stainless steel case 40 mm in diameter. Rolex logo on a crown. Bidirectional rotating bezel with a special 24-hour black and red coke bezel insert.
             Scratch resistant sapphire crystal. Black dial with white luminescent hour markers and mercedes hands. Date window at 3 o'clock aperture. 
             Stainless steel oyster bracelet with fold over clasp."
            price="C$16,833"
          ></ItemListContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
