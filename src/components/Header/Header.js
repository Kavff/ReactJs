import "./Header.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Logo from "../../assets/logo_small.png";
import CartWidget from "../CartWidget/CartWidget";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div>
                <img width={"605px"} height={"100px"} src={Logo} alt="logo"></img>
              </div>
            </Typography>

            <Button variant="outlined" color="secondary">
              HOME
            </Button>
            <Button variant="outlined" color="secondary">
              ABOUT US
            </Button>
            <Button variant="outlined" color="secondary">
              LOGIN IN OR REGISTER
            </Button>

            <CartWidget></CartWidget>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;


