
import React from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


const Item = ({ product }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 5}}>
        <div className="imgCards">
          <img src={product.img} alt={product.name}></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <hr/>
          <Typography variant="body2" color="text.secondary">
            {product.desc}
          </Typography>
          <hr/>
          <Typography variant="h5" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Cart</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    </div>
  )
}

export default Item
