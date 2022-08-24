import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
/* import CardMedia from "@mui/material/CardMedia";
 */import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MasterRolexS from "../../assets/rolexMasterS-Square280.webp";
import "./ItemsListContainer.scss";

export function ItemListContainer() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <div className="imgCards">
          <img src={MasterRolexS} alt="MasterRolexS"></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ROLEX
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rolex GMT-Master II - NEW 2022 - AVAILABLE NOW JUBILEE BRACELET
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
