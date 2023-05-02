import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'



const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    console.log(totalQuantity)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' >Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3> Total: ${total}</h3>
            <button onClick={() => clearCart()} className="btn btn-primary ButtonLimpiar">Limpiar carrito</button>
            < botton type="button" className="btn btn-warning btnChec " ><Link to='/checkout' >Checkout</Link></botton >
        </div>
    )
}

export default Cart


