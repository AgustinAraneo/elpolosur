import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const CardList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>
            setUsers(res.data)
        );
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 w-[80%] mx-auto m-4">
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <Link to={`/item/${user.id}`}>
                            <ProductCard data={user} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;
