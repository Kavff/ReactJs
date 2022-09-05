import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({ products }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 5 }}>
        <div className="imgCards">
          <img src={products.img} alt={products.name}></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {products.name}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            {products.desc}
          </Typography>
          <hr />
          <Typography variant="h5" color="primary">
            ${products.price}
          </Typography>
          <Typography variant="h5" color="text.secondary">
          <div><ItemCount initial={products.stock > 1 ? 1 : 0} stock={products.stock}/></div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetails;
