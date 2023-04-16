import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className="ListGoup">
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </div>
    )
}

export default ItemList