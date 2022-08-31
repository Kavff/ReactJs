import { useEffect, useState } from "react";
import "./ItemsListContainer.scss";
import ItemList from "../ItemList/ItemList";
import dataRequest from "../../helpers/dataRequest";

const ItemListContainer = () => {
  // Here in the container i use THE logic for my request from my API.

  const [products, setProducts] = useState([]);

  /*   const [loading, setLoading] = useState(true);
   */
  useEffect(() => {
    dataRequest()
      .then((res) => {
        setProducts(res);
        /*         setLoading(false);
         */
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
};
export default ItemListContainer;
