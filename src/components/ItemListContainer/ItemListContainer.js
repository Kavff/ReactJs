import { useEffect, useState } from "react";
import "./ItemsListContainer.scss";
import ItemList from "../ItemList/ItemList";
import ContainerTitle from "../ContainerTitle/ContainerTitle";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db } from "../../firebase/config";
import { collection, getDocs,query,where } from "firebase/firestore/lite";

const ItemListContainer = () => {
  // Here in the container i use THE logic for my request from my API.

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    //1-  Built reference (sync)
    const productsRef = collection(db, "productos");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;
    //2-  Consume reference (async)
    getDocs(q)
      .then((resp) => {
        const productsDB = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsDB);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (

    <>
          
      {loading ? (
        <div className="Spinner">
          <Loader />
        </div>
      ) : (
        <div className="containerList">
          <ContainerTitle title="Our Most Popular Models"></ContainerTitle>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
