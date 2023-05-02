import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import './CartItem.css'

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div className="itemCarrito">
            <h4>Item: {name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {price}</p>
            <p>Sub Total: {price * quantity}</p>
            <button className="btn btn-danger" onClick={handleRemove}>Eliminar</button>
        </div>
    )

}

export default CartItem