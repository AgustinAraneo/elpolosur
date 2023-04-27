import React, { useState } from 'react';
import Navbar from '../components/desktop/NavBar';
import Footer from '../components/desktop/Footer';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
import { FaCheckCircle } from 'react-icons/fa';


function Checkout() {
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

    return (
        <div className='h-screen'>
            <Navbar />
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto m-10">
                <h2 className="text-2xl font-medium mb-4">Checkout</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label htmlFor="firstName" className="block font-medium mb-2">Nombre</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border rounded py-2 px-3" required />
                    </div>
                    <div className="w-full md:w-1/2 mb-4 md:pl-2">
                        <label htmlFor="lastName" className="block font-medium mb-2">Apellido</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border rounded py-2 px-3" required />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border rounded py-2 px-3" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="emailConfirmation" className="block font-medium mb-2">Confirmar Email</label>
                    <input type="email" id="emailConfirmation" name="emailConfirmation" value={formData.emailConfirmation} onChange={handleInputChange} className="w-full border rounded py-2 px-3" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block font-medium mb-2">Dirección</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full border rounded py-2 px-3" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">Finalizar Pedido</button>
            </form>
            {purchaseId.length ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <div className="flex flex-auto justify-center">
                        <FaCheckCircle className="inline-block mr-2 text-green-500" size={20} />
                        <p>El Nro. de su compra es <b>{purchaseId}</b></p>
                    </div>
                </div>
            ) : null}
            <div className='absolute bottom-0 right-0 left-0'>
                <Footer />
            </div>
        </div>
    );
}

export default Checkout;
