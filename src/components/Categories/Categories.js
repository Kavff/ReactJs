import React from "react";
import "./Categories.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="containerButtons">
      <hr />

      <div>
        <Link
          className="cardLink"
          to="/Categories/Breguet"
          variant="outlined"
          color="secondary"
        >
          <Button
            className="buttonCategories"
            variant="contained"
            color="secondary"
          >
            BREGUET
          </Button>
        </Link>
      </div>
      <hr />

      <div>
        <Link
          className="cardLink"
          to="/Categories/Richard Mille"
          variant="outlined"
          color="secondary"
        >
          <Button variant="outlined" color="secondary">
            RICHARD MILLE
          </Button>
        </Link>
      </div>
      <hr />

      <div>
        <Link
          className="cardLink"
          to="/Categories/Rolex"
          variant="outlined"
          color="secondary"
        >
          <Button variant="contained" color="secondary">
            ROLEX
          </Button>
        </Link>
      </div>
      <hr />

      <div>
        <Link
          className="cardLink"
          to="Categories/Hamilton"
          variant="outlined"
          color="secondary"
        >
          <Button variant="outlined" color="secondary">
            HAMILTON
          </Button>
        </Link>
      </div>
      <hr />
      <div>
        <Link
          className="cardLink"
          to="Categories/Audemars Piguet"
          variant="outlined"
          color="secondary"
        >
          <Button variant="contained" color="secondary">
            AUDEMARS PIGUET
          </Button>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Categories;
