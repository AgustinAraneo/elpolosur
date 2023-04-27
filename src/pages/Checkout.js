import React, { useState, useContext } from 'react';
import Navbar from '../components/desktop/NavBar';
import Footer from '../components/desktop/Footer';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
import { FaCheckCircle } from 'react-icons/fa';
import { CartContext } from '../components/context/CartContext';


function Checkout() {
    const { cartArray } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
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
    

    return (
        <div className='h-screen'>
            <Navbar />
            <div>
                <h1>
                    Pedido actual:
                </h1>
                <ul>
                    {cartArray.map((item) => (
                        <li key={item.product.id}>
                            <p>Producto: {item.product.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => handleRemoveFromCart(item.product.id)}>
              Eliminar
            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="max-w-lg m-10 mx-auto">
                <h2 className="mb-4 text-2xl font-medium">Checkout</h2>
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
                    <div className="flex justify-center flex-auto">
                        <FaCheckCircle className="inline-block mr-2 text-green-500" size={20} />
                        <p>El Nro. de su compra es <b>{purchaseId}</b></p>
                    </div>
                </div>
            ) : null}
            <div className='absolute bottom-0 left-0 right-0'>
                <Footer />
            </div>
        </div>
    );
}

export default Checkout;
