import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from '../components/desktop/ProductCard'
import NavBar from '../components/desktop/NavBar';
import Footer from '../components/desktop/Footer'

const UserDetail = () => {
    const [user, setUser] = useState({});

    let { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
            setUser(res.data)
        );
    }, [id]);

    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center mb-10 mt-4">
                <h1 className="uppercase tracking-wide text-xl text-cyan-500 font-semibold mb-4">Producto:</h1>
                <ProductCard data={user} />
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default UserDetail;
