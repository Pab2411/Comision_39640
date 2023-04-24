import { useContext } from 'react';
import Carrito from './assets/Carrito.png'
import './Carrito.css';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='carrito' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='carrito-img' src={Carrito} alt="carrito-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget