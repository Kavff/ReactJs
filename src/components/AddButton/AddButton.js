
import React from 'react'
import Button from "@mui/material/Button";


const AddButton = ({handleAddToCart}) => {
    
  return (
    <div>
      <div>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            color="secondary"
          >
            Add to Cart
          </Button>
        </div>
    </div>
  )
}

export default AddButton
