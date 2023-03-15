import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full mb-4">
                        <h3 className="text-lg mb-2 font-semibold">Sobre nosotros</h3>
                        <p className="text-sm">Somos una empresa dedicada a la venta de productos para outdoor. Nos apasiona la naturaleza y queremos ayudar a que más personas la disfruten.</p>
                    </div>
                    <div className="w-full mb-4">
                        <h3 className="text-lg mb-2 font-semibold">Enlaces útiles</h3>
                        <ul className="text-sm">
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Inicio</a></li>
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Productos</a></li>
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Blog</a></li>
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="w-full mb-4">
                        <h3 className="text-lg mb-2 font-semibold">Contacto</h3>
                        <p className="text-sm">Av. Siempre Viva 123, Springfield<br />Teléfono: +54 11 5555-5555<br />Email: info@elpolosur.com</p>
                    </div>
                </div>
            </div>
            <div className="border-gray-400 border-t-[3px] w-[85%] mx-auto">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-between md:flex-row py-4">
                        <div className="text-sm text-gray-500 mb-4">
                            &copy; 2023 ELPOLOSUR Store. Todos los derechos reservados.
                        </div>
                        <div className="flex items-center">
                            <a href="/" className="text-gray-400 hover:text-gray-300 ml-4">
                                <FaFacebook />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-300 ml-4">
                                <FaInstagram />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-300 ml-4">
                                <FaTwitter />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
