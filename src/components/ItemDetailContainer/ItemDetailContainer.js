import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import dataRequest from "../../helpers/dataRequest";
import ItemDetails from "../itemDetails/ItemDetails";
import Loader from "../Loader/Loader";
const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    dataRequest()
      .then((res) => {
        setProducts(res.find((prod) => prod.id === Number(itemId)));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);
  console.log(products);
  return (
    <>
      {loading ? (
        <div className="Spinner">
          <Loader />
        </div>
      ) : (
        <ItemDetails products={products} />
      )}
    </>
  );
};

export default ItemDetailContainer;
