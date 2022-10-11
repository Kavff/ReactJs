import "./Header.scss";
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logo from "../../assets/logo_small.png";
/* import CartWidget from "../CartWidget/CartWidget";
 */ import { Link } from "react-router-dom";
/* import SearchBox from "../SearchBox/SearchBox";
 */ import Categories from "../Categories/Categories";
import { useLoginContext } from "../../context/LoginContext";
import { Button } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";


const Header = () => {
  const { logout } = useLoginContext();
  const [user,setUser] = useState({})

  onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser);
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
          <Toolbar className="logo&Login">
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <div className="imgDiv">
                <Link to="/">
                  <img 
                  className="imgLogo"
                    width={"550px"}
                    height={"80px"}
                    src={Logo}
                    alt="logo"
                  ></img>
                </Link>
              </div>
            </Typography>
            {/* <div>
                    <SearchBox />
                    </div>
                    <div>
                    <CartWidget fontSize={"large"} />
                  </div> */}
            <small>Welcome: {user.email}</small>
            <Button onClick={logout} variant="text" color="secondary">
              Logout
            </Button>
          </Toolbar>
        <Categories />
      </AppBar>
    </Box>
  );
};

export default Header;
