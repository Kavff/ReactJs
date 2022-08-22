import "./Header.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon></MenuIcon>
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

            <Button variant="outlined" color="primary">
              HOME
            </Button>
            <Button variant="outlined" color="primary">
              ABOUT US
            </Button>
            <Button variant="outlined" color="primary">
              LOGIN IN OR REGISTER
            </Button>
          
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
