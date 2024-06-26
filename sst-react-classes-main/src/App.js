import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import Cart from './components/Cart/Cart'; // Import the Cart component

function App() {
  let [cart, setCart] = useState({});

  function increaseQuantity(product) {
    console.log('Increase quantity called for product:', product);
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
    console.log('Cart after increase:', newCart); // Debugging line
  }

  function decreaseQuantity(product) {
    console.log('Decrease quantity called for product:', product);
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
    console.log('Cart after decrease:', newCart); // Debugging line
  }

  console.log('Products a and b:', a, b); // Debugging line

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <Products />
        <Cart /> {/* Add the Cart component here */}
      </div>
    </CartContext.Provider>
  );
}

export default App;
