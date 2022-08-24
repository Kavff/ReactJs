import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
/* import CardMedia from "@mui/material/CardMedia";
 */import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/* import MasterRolexS from "../../assets/rolexMasterS-Square280.webp";
 */import "./ItemsListContainer.scss";

export function ItemListContainer({img,alt,productTitle,description,price}) {

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 5}}>
        <div className="imgCards">
          <img src={img} alt={alt}></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Cart</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemListContainer;
