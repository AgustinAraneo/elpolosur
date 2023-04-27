import React from 'react';
import Inicio from '../../pages/Inicio'
import Productos from '../../pages/Productos'
import ProductDetail from '../../pages/ProductDetail'
import SobreNosotros from '../../pages/SobreNosotros'
import Contacto from '../../pages/Contacto'
import Checkout from '../../pages/Checkout'
import Category from '../../pages/Category';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from '../context/CartContext';

const Desktop = () => {
    return (
        <CartProvider>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/sobreNosotros" element={<SobreNosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/item/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/category/:category" element={<Category />} />
                </Routes>
            </div>
        </Router>
        </CartProvider>
    );
};

export default Desktop;
