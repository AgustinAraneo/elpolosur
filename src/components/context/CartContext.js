import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([]);

    const addToCart = (prod, count) => {
        const existingProduct = cartArray.find(item => item.product.id === prod.id || item.product.name === prod.name);

        if (existingProduct) {
            const updatedCart = cartArray.map(item => {
                if (item.product.id === existingProduct.product.id) {
                    return { ...item, quantity: item.quantity + count };
                } else {
                    return item;
                }
            });
            setCartArray(updatedCart);
        } else {
            setCartArray([...cartArray, { product: prod, quantity: count }]);
        }
    };

    const handleClearCart = () => {
        setCartArray([]);
    };


    const removeFromCart = (productId) => {
        setCartArray(cartArray.filter(item => item.product.id !== productId));
    }

    const value = {
        cartArray,
        addToCart,
        removeFromCart,
        handleClearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider
