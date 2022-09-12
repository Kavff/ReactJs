import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


export function CartWidget() {

    const { cartQuantity } = useContext(CartContext)
    return (

       <Link to="/Cart">
        <IconButton>
          <ShoppingCartIcon color="secondary"></ShoppingCartIcon>
          <span className='spanWid'>0</span>
        </IconButton>

        
        </Link>
    );
}

export default CartWidget;





