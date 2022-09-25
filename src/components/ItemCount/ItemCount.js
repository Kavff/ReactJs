import "./ItemCount.scss";
import React from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, counter, setCounter}) => {
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
        <div className="counterButtonAddSub">
          <Button className="subtractButton" onClick={handleSubtract} variant="outlined" color="primary">
            -
          </Button>
          <span className="counterNumber"> {counter} </span>
          <Button className="addButton" onClick={handleAdd} variant="contained" color="primary">
            +
          </Button>
        </div>
      
      </div>
    </>
  );
};
export default ItemCount;
