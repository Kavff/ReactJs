import React from "react";
import Item from "../Item/Item";
import "../ItemList/ItemList.scss"

const ItemList = ({ products = [] }) => {
  return (
    <div className="divCards">
      {products.map((prod) => <Item product={prod} key={prod.id} />)}
    </div>
  );
};

export default ItemList;

