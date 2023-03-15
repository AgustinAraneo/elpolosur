import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 font-Montserrat">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg mb-2 font-semibold">Sobre nosotros</h3>
                        <p className="text-sm">Somos una empresa dedicada a la venta de productos para outdoor. Nos apasiona la naturaleza y queremos ayudar a que más personas la disfruten.</p>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg mb-2 font-semibold ml-28">Enlaces útiles</h3>
                        <ul className="text-sm ml-28">
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Inicio</a></li>
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Productos</a></li>
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Blog</a></li>
                            <li className="mb-1"><a href="/" className="hover:text-gray-100">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg mb-2 font-semibold">Contacto</h3>
                        <p className="text-sm">Av. Siempre Viva 123, Springfield<br />Teléfono: +54 11 5555-5555<br />Email: info@elpolosur.com</p>
                    </div>
                </div>
            </div>
            <div className="border-gray-400 border-t-[3px] w-[75%] mx-auto">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-between md:flex-row py-4">
                        <div className="text-sm text-gray-500">
                            &copy; 2023 ELPOLOSUR Store. Todos los derechos reservados.
                        </div>
                        <div className="flex mt-4 md:mt-0">
                            <a href="/" className="text-gray-400 hover:text-gray-300 ml-4">
                                <span className="sr-only">Facebook</span>
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-300 ml-4">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-300 ml-4">
                                <span className="sr-only">Twitter</span>
                                <FaTwitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
