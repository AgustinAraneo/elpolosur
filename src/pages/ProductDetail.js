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
                    <FaSpinner className="animate-spin text-4xl text-gray-500" />
                </div>
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center mb-10 mt-4">
                <h1 className="uppercase tracking-wide text-xl text-cyan-500 font-semibold mb-4">Producto:</h1>
                <ProductCard data={product} />
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default UserDetail;
