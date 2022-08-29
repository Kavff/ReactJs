import "./ItemCount.scss";
import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ product,stock, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);
  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const handleSubtract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <>
        <h2>{product}</h2>
        <h3>Stock:{stock}</h3>
        <hr />
        <Button onClick={handleSubtract} variant="outlined" color="primary">
          -
        </Button>
        <span className="numberCounter">{counter}</span>
        <Button onClick={handleAdd} variant="contained" color="primary">
          +
        </Button>
      </>
      <hr />
      <>
        <Button variant="contained" color="secondary">
          Add to Cart
        </Button>
      </>
    </div>
  );
};
export default ItemCount;
