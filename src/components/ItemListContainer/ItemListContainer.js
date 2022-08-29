import * as React from "react";

/* import CardMedia from "@mui/material/CardMedia";
 */
/* import MasterRolexS from "../../assets/rolexMasterS-Square280.webp";
 */import "./ItemsListContainer.scss";

 
export function ItemListContainer() {

 // Here on the container i use THE logic for my request from my API.
  

  dataRequest()
  .then ((res) => {

    console.log(res)
  })
  .catch((error) => {

    console.log(error)
  })
.finally(() => {
  console.log("End")
})

  return (
    <div>
          <h2>Products</h2>
        <hr/>
      
    </div>
  );
}

export default ItemListContainer;
