import React from "react";
import "./Categories.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categoriesButton">
      <div>
        <Link className="cardLink" to="/Categories/Rolex" variant="outlined" color="secondary">
          <Button variant="contained" color="secondary">
            ROLEX
          </Button>
        </Link>
      </div>
      <div>
        <Link className="cardLink" to="Categories/Hamilton" variant="outlined" color="secondary">
          <Button variant="outlined" color="primary">
            HAMILTON
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
