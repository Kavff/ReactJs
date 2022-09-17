import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetails from "../itemDetails/ItemDetails";
import Loader from "../Loader/Loader";
import { db } from "../../firebase/config"
import { doc,getDoc } from "firebase/firestore/lite"



const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1 - Build reference (sync)

    const docRef = doc(db,'productos',itemId)

    // 2 - Call DB (async)
    
    getDoc(docRef)
    .then((doc) => {
    setProducts({id: doc.id, ...doc.data()})
    })
    .finally(() => {
      setLoading(false);
    })  }, []);
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
