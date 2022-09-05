import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";



const SearchWidget = () => {
  return (
    <div>
      <IconButton type="button" sx={{ p: "15px" }} aria-label="search">
        <SearchIcon color="black" />
      </IconButton>
    </div>
  );
};

export default SearchWidget;
