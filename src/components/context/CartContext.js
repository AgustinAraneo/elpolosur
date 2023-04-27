import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([]);

    const addToCart = (prod, count) => {
        setCartArray([...cartArray, { product: prod, quantity: count }]);
    };

    const removeFromCart = (productId) => { // Definimos la función removeFromCart
        setCartArray(cartArray.filter(item => item.product.id !== productId));
      }

    const value = {
        cartArray,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider