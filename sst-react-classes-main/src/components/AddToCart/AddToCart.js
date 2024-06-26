import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({ product }) {
    console.log("add to cart", product.id,product.title,product.price);
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    function increase() {
        console.log('Increase button clicked for product:', product);
        increaseQuantity(product);
    }

    function decrease() {
        console.log('Decrease button clicked for product:', product);
        decreaseQuantity(product);
    }

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;

    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
        );  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        );
    }
}

export default AddToCart;
