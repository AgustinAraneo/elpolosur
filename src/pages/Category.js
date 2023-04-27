import React, { useEffect, useState } from "react";
import Navbar from "../components/desktop/NavBar";
import Footer from "../components/desktop/Footer";
import ProductCardInfo from "../components/desktop/ProductCardInfo";
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
    const [categorys, setCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { category } = useParams();

    const q = query(collection(db, "camping"), where("category", "==", category));

    useEffect(() => {
        const getCategory = async () => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setCategorys(docs);
            setIsLoading(false);
        };
        getCategory();
    }, [q]);

    return (
        <div className="bg-zinc-700">
            <Navbar />
            <div className="">
                <h1 className="mt-6 mb-6 text-4xl font-bold text-center text-cyan-500">
                    Brindando productos de calidad, desde el primer momento.
                </h1>
                {isLoading ? (
                    <div className="flex items-center justify-center h-32">
                        <FaSpinner className="text-3xl text-gray-500 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 w-[50%] mx-auto m-4 pb-[110px]">
                        {categorys.map((data) => {
                            return (
                                <div key={data.id}>
                                    <Link to={`/item/${data.id}`}>
                                    <ProductCardInfo data={data} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Category;
