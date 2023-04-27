import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const hideDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-6 bg-black/80">
            <div className="flex items-center flex-shrink-0 text-white">
                <div className="bg-transparent p-2 rounded border-[3px] border-white w-52 h-14">
                    <p className="text-3xl font-medium tracking-wider text-center text-gray-400 uppercase font-Roboto">
                        El<span className="text-white">PoloSur</span>
                    </p>
                </div>
            </div>
            <div className="flex-grow w-full lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow flex justify-end gap-x-20 uppercase font-Roboto items-center max-[1200px]:gap-x-4 max-[1000px]:text-base">
                    <Link className="block mt-4 mr-4 text-white Link lg:inline-block lg:mt-0 hover:text-gray-400" to="/" >
                        Inicio
                    </Link>
                    <div className="relative">
                        <button className="block mt-4 mr-4 text-white Link lg:inline-block lg:mt-0 hover:text-gray-400" onClick={toggleDropdown}>
                            PRODUCTOS
                        </button>
                        {showDropdown && (
                            <div className="absolute z-10 py-2 rounded-lg bg-black/80">
                                <Link className="block px-4 py-2 text-white hover:text-gray-400" to="/category/Carpa" onClick={hideDropdown}>
                                    Carpas
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:text-gray-400" to="/category/Conservadora" onClick={hideDropdown}>
                                    Conservadoras
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:text-gray-400" to="/category/Mochila" onClick={hideDropdown}>
                                    Mochilas
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link className="block mt-4 mr-4 text-white Link lg:inline-block lg:mt-0 hover:text-gray-400" to="/sobreNosotros" >
                        Sobre Nosotros
                    </Link>
                    <Link className="block mt-4 mr-4 text-white Link lg:inline-block lg:mt-0 hover:text-gray-400" to="/contacto" >
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
