import { useEffect, useState } from "react";
import "./ItemsListContainer.scss";
import ItemList from "../ItemList/ItemList";
import ContainerTitle from "../ContainerTitle/ContainerTitle";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection,getDocs } from "firebase/firestore"
import { db } from '../../firebase/config'

const ItemListContainer = () => {
  // Here in the container i use THE logic for my request from my API.
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { categoryId } = useParams();

  useEffect(() => {
    
    //1-  Built reference
      const productosRef = collection(db, 'productos');
    getDocs(productosRef)
      .then((resp) => {
        const productosDB = resp.docs.map  ((doc) => ({id : doc.id, ...doc.data()}) )
        console.log(productosDB)
        setProducts(productosDB)

      }).finally(() => {
        setLoading(false)
      })

    //2-  Consume reference
  }, [categoryId]);


  return (
    <>
      {loading ? (
        <div className="Spinner">
         <Loader/>
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
