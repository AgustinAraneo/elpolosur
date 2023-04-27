import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
// Firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore"

const CardList = () => {

    const [camping, setCamping] = useState([])

    const q = query(collection(db, "camping"))

    useEffect(() => {
        const getCamping = async () => {
            const querySnapshot = await getDocs(q);
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setCamping(docs)
        }
        getCamping()
    }, [q])

    return (
        <div className="grid grid-cols-3 gap-4 w-[80%] mx-auto m-4">
            {camping.map((camping) => {
                return (
                    <div key={camping.name}>
                        <Link to={`/item/${camping.id}`}>
                            <div className=''>
                                <ProductCard data={camping} />
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;
