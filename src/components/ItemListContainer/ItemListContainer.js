import { useEffect, useState } from "react";
import "./ItemsListContainer.scss";
import ItemList from "../ItemList/ItemList";
import dataRequest from "../../helpers/dataRequest";
import ContainerTitle from "../ContainerTitle/ContainerTitle";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
  // Here in the container i use THE logic for my request from my API.

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    dataRequest()
      .then((res) => {
        if (!categoryId) {
          setProducts(res);
        } else {
          setProducts(res.filter((prod) => prod.category === categoryId));
        }
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <div className="Spinner">
          <Stack sx={{ color: "grey.500" }} spacing={5} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="secondary" />
            <CircularProgress color="secondary" />
          </Stack>
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
