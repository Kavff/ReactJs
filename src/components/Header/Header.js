import "./Header.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logo from "../../assets/logo_small.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import Categories from "../Categories/Categories";
import { useLoginContext } from "../../context/LoginContext";
import { Button } from "@mui/material";

const Header = () => {

  const {user,logout} = useLoginContext()
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <div className="imgDiv">
                <Link to="/">
                  <img
                    width={"550px"}
                    height={"80px"}
                    src={Logo}
                    alt="logo"
                  ></img>
                </Link>
              </div>
            </Typography>

            <SearchBox />
            <CartWidget fontSize={"large"}/>
            <div>
              <small>Welcome: {user.user}</small>
              <Button onClick={logout} variant="text" color="secondary">
                Logout
              </Button> 

            </div>

          </Toolbar>
          <Categories/>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
