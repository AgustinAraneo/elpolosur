import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import CartWidget from "./CartWidget";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-black/80 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="bg-transparent p-2 rounded border-[3px] border-white w-56 h-18">
                    <p className="text-gray-400 font-medium uppercase text-3xl font-Roboto tracking-wider text-center">
                        El<span className="text-white">PoloSur</span>
                    </p>
                </div>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
                >
                    <MdMenuOpen className="h-6 w-6" />
                </button>
            </div>
            <div
                className={`w-full flex-col ${isOpen ? "" : "hidden"
                    }`}
            >
                <div className="text-lg justify-center uppercase font-Roboto items-center">
                    <a
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
                    >
                        Inicio
                    </a>
                    <a
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
                    >
                        Productos
                    </a>
                    <a
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
                    >
                        Sobre Nosotros
                    </a>
                    <a
                        href="/"
                        className="block mt-4 mb-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
                    >
                        Contacto
                    </a>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
