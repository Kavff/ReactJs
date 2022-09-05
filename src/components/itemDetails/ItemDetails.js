
import React from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ItemDetails = ({item}) => {

    return (

    <div>
      <Card sx={{ maxWidth: 345, margin: 5}}>
        <div className="imgCards">
          <img src={item.img} alt={item.name}></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <hr/>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
          <hr/>
          <Typography variant="h5" color="text.secondary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Cart</Button>
        </CardActions>
      </Card>
      
    </div>
  )
}

export default ItemDetails
