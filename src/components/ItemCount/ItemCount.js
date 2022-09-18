import "./ItemCount.scss";
import React from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, counter, setCounter, handleAddToCart }) => {
  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="counterContainer">
        <h3>Stock: {stock}</h3>
        <hr className="counterHr" />
        <div className="counterButtonAddSub">
          <Button onClick={handleSubtract} variant="outlined" color="primary">
            -
          </Button>
          <span className="counterNumber"> {counter} </span>
          <Button onClick={handleAdd} variant="contained" color="primary">
            +
          </Button>
        </div>
        <hr className="cardHr" />
        <div>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            color="secondary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
