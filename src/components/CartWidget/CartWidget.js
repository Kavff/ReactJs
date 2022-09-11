import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function CartWidget() {

    return (

       <div>
        <IconButton>
          <ShoppingCartIcon color="secondary"></ShoppingCartIcon>
          <span>0</span>
        </IconButton>

        
        </div>
    );
}

export default CartWidget;





