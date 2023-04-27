import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-black/80 p-6">
            <div className="flex items-center flex-shrink-0 text-white">
                <div className="bg-transparent p-2 rounded border-[3px] border-white w-52 h-14">
                    <p className="text-gray-400 font-medium uppercase text-3xl font-Roboto tracking-wider text-center">
                        El<span className="text-white">PoloSur</span>
                    </p>
                </div>
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow flex justify-end gap-x-20 uppercase font-Roboto items-center max-[1200px]:gap-x-4 max-[1000px]:text-base">
                    <Link className="Link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/" >
                        Inicio
                    </Link>
                    <div className="relative">
                        <button className="Link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" onClick={toggleDropdown}>
                            PRODUCTOS
                        </button>
                        {showDropdown && (
                            <div className="absolute z-10 bg-black/80 py-2 rounded-lg">
                                <Link className="block px-4 py-2 text-white hover:text-gray-400" to="/category/Carpa" >
                                    Carpas
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:text-gray-400" to="/category/Conservadora" >
                                    Conservadoras
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:text-gray-400" to="/category/Mochila" >
                                    Mochilas
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link className="Link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/sobreNosotros" >
                        Sobre Nosotros
                    </Link>
                    <Link className="Link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/contacto" >
                        Contacto
                    </Link>
                    <Link to="/checkout" >
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
