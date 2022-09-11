import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import "./Items.scss";
import theme from "../../themeConfig"
import { ThemeProvider } from "@mui/material/styles";

const Item = ({ product }) => {
  let navigate = useNavigate();

  const handNavigation = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card className="cardMain" sx={{ width: 350, margin: 5 }}>
          <div className="cardImg">
            <img src={product.img} alt={product.name}></img>
          </div>
          <hr />
          <CardContent>
            <Typography className="cardName" gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <hr />
          </CardContent>
          <div>
            <CardActions>
              <div>
                <Button
                  className="cardButton"
                  onClick={handNavigation}
                  size="large"
                >
                  Learn More
                </Button>
              </div>
            </CardActions>
          </div>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default Item;
