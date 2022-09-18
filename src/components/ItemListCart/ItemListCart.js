import React, { useEffect, useState } from "react";
import ItemCart from "../itemCart/ItemCart";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";
import Loader from "../Loader/Loader";

const ItemListCart = (product) => {
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1 - Build reference (sync)

    const docRef = doc(db, "productos", itemId);

    // 2 - Call DB (async)

    getDoc(docRef)
      .then((doc) => {
        setProducts({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemCart />
          <div>
            <p> Subtotal: $ {product.price * product.quantity}</p>
          </div>
        </>
      )}
    </>
  );
};

export default ItemListCart;
