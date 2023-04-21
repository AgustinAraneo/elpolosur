import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function Navbar() {
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
                    <Link className="Link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/productos" >
                        Productos
                    </Link>
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
