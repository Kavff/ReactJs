import React from "react";
import "./SearchBox.scss";
import SearchWidget from "../SearchWidget/SearchWidget";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
/* import Divider from '@mui/material/Divider';
 */  import IconButton from "@mui/material/IconButton";
/* import MenuIcon from "@mui/icons-material/Menu"; 
 */import  MenuItem  from "../MenuItem/MenuItem.js";

const SearchBox = () => {
  return (
    <div className="boxDetails">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 900 }}
      >
        {
          <IconButton sx={{ p: "15px" }} aria-label="menu">
            <MenuItem />
          </IconButton>
        }

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <SearchWidget />

        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
         */}
      </Paper>
    </div>
  );
};

export default SearchBox;
