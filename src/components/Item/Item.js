import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  let navigate = useNavigate();

  const handNavigation = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 5 }}>
        <div className="imgCards">
          <img src={product.img} alt={product.name}></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <hr />
        </CardContent>
        <div>
          <CardActions>
            <div>
            <Button onClick={handNavigation} size="large">
              Learn More
            </Button>
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default Item;
