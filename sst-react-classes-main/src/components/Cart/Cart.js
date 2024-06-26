import { useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
    // useEffect()
    let items = useSelector((state) => state.items);
    console.log(items.length);
    let length = items?Object.values(items).length:0;
    return (
        <div>
            <h2>Cart</h2>
            {length > 0 ? (
                Object.values(items).map((item, index) => (
                    <div key={index}>
                        <p>Title: {item.title}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Price: {item.price.value}</p>
                        <p>Quantity: {item.quantity}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default Cart;