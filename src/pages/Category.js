import React, { useEffect, useState } from "react";
import Navbar from "../components/desktop/NavBar";
import Footer from "../components/desktop/Footer";
import ProductCard from "../components/desktop/ProductCard";
// import ProductCard from "./ProductCard";
// import { Link } from "react-router-dom";
// Firebase
import { db } from "../firebase/firebaseConfig"
import { collection, query, getDocs, where } from "firebase/firestore"
import { useParams } from "react-router-dom";

const Category = () => {

    const [categorys, setCategorys] = useState([])

    let { category } = useParams()

    const q = query(collection(db, "camping"), where("category", "==", category));

    useEffect(() => {
        const getCategory = async () => {
            const querySnapshot = await getDocs(q);
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setCategorys(docs)
        }
        getCategory()
    }, [q])

    return (
        <div>
            <Navbar />
            <div>
                {categorys.map((data) => {
                    return (
                        <div key={data.id}>
                            <p>Conoce mas sobre nuestras mejores {data.category}s</p>
                            <ProductCard data={data} />
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Category