import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from '../components/desktop/ProductCard'
import NavBar from '../components/desktop/NavBar';
import Footer from '../components/desktop/Footer'
import { FaSpinner } from 'react-icons/fa';

// Firebase
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const UserDetail = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    let { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "camping", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({ ...docSnap.data(), id: docSnap.id });
            } else {
                console.log("Producto no encontrado!");
            }

            setLoading(false);
        };

        getProduct();
    }, [id]);

    if (loading) {
        return (
            <div>
                <div className="flex items-center justify-center h-screen">
                    <FaSpinner className="text-4xl text-gray-500 animate-spin" />
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen bg-zinc-700">
            <NavBar />
            <div className="flex flex-col items-center justify-center mt-4 mb-10">
                <h1 className="mt-3 mb-3 text-4xl font-bold text-center text-cyan-500">PRODUCTOS:</h1>
                <ProductCard data={product} />
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default UserDetail;
