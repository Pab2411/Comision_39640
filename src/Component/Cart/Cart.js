import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'



const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    console.log(totalQuantity)

    if (totalQuantity === 0) {
        return (
            <div className='noHayItems'>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className="btn btn-light" >Ver todos los Productos</Link>
            </div>
        )
    }

    return (
        <>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className="cartCaja">
                <h3 className='cartTotal'> Total: ${total}</h3>
                <button onClick={() => clearCart()} className="btn btn-primary buttonLimpiar">Limpiar carrito</button>
                < botton type="button" className="btn btn-warning buttonChecout" ><Link to='/checkout' className='chekoutLink' >Checkout Order</Link></botton >
            </div>
        </>
    )
}

export default Cart


