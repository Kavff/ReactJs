import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import dataRequest from "../../helpers/dataRequest";
import ItemDetails from "../itemDetails/ItemDetails";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    dataRequest()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  });

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
        <div>
          <ItemDetails item={item}/>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
