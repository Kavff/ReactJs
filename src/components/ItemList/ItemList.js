import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products = [] }) => {
  return (
    <div>
      {products.map((prod) => {
        return <Item product={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default ItemList;
