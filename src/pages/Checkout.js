import React, { useState, useContext } from 'react';
import Navbar from '../components/desktop/NavBar';
import Footer from '../components/desktop/Footer';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
import { FaCheckCircle } from 'react-icons/fa';
import { CartContext } from '../components/context/CartContext';
import { FaTrash } from "react-icons/fa";


function Checkout() {
    const { cartArray } = useContext(CartContext);
    const { removeFromCart, handleClearCart } = useContext(CartContext);
    const [purchaseId, setPurchaseId] = useState("")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        emailConfirmation: '',
        address: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.email !== formData.emailConfirmation) {
            alert('El email es distinto!');
            return;
        }
        const docRef = await addDoc(collection(db, "purchases"), {
            formData,
        })
        setPurchaseId(docRef.id)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            emailConfirmation: '',
            address: '',
        });
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const calculateTotal = () => {
        let total = 0;
        for (const item of cartArray) {
            total += item.quantity * item.product.price;
        }
        return total;
    };


    return (
        <div className='h-full font-Montserrat'>
            <Navbar />
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-2xl font-bold mb-4 text-cyan-500">Pedido Actual:</h1>
                {cartArray.length > 0 ? (
                    <div className="w-full max-w-3xl">
                        {cartArray.map((item) => (
                            <div
                                key={item.product.id}
                                className="flex items-center justify-between border-b-2 border-black/50 pb-2 mb-2"
                            >
                                <div className="flex items-center">
                                    <img
                                        className="w-16 h-16 object-contain mr-4"
                                        src={item.product.img}
                                        alt={item.product.name}
                                    />
                                    <div>
                                        <p className="font-bold">{item.product.name}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio: <span className='font-bold'>${item.quantity * item.product.price}</span></p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.product.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                        <div className="flex justify-end items-center">
                            <p className="text-lg font-bold mr-4">Total: ${calculateTotal()}</p>
                            <button
                                onClick={handleClearCart}
                                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded font-bold"
                            >
                                Vaciar carrito
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-lg">El carrito está vacío.</p>
                )}
            </div>
            <form onSubmit={handleSubmit} className="max-w-lg m-10 mx-auto">
                <h2 className="mb-4 text-2xl font-bold text-cyan-500">Checkout</h2>
                <div className="flex flex-wrap">
                    <div className="w-full mb-4 md:w-1/2 md:pr-2">
                        <label htmlFor="firstName" className="block mb-2 font-medium">Nombre</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
                    </div>
                    <div className="w-full mb-4 md:w-1/2 md:pl-2">
                        <label htmlFor="lastName" className="block mb-2 font-medium">Apellido</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="emailConfirmation" className="block mb-2 font-medium">Confirmar Email</label>
                    <input type="email" id="emailConfirmation" name="emailConfirmation" value={formData.emailConfirmation} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2 font-medium">Dirección</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <button type="submit" className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600">Finalizar Pedido</button>
            </form>
            {purchaseId.length ? (
                <div className="relative px-4 py-3 text-green-700 bg-green-100 border border-green-400 rounded" role="alert">
                    <div className="flex justify-center flex-auto items-center">
                        <FaCheckCircle className="inline-block mr-4 text-green-500" size={20} />
                        <p className='text-center'>Felicitaciones! Su pedido ha sido realizada.<br />El Nro. de su compra es <b>{purchaseId}</b></p>
                    </div>
                </div>
            ) : null}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Checkout;
