import Carrito from './assets/Carrito.png'
import './Carrito.css';

const CartWidget =() =>{
    return(
        <div className = 'carrito'>
            <div>0</div>
            <img className ='carrito-img'src = {Carrito} alt="carrito-widget"/>
            
        </div>
    )
}

export default CartWidget