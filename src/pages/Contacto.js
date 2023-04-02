/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import NavBar from '../components/desktop/NavBar'
import Footer from '../components/desktop/Footer'

const Contacto = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-gray-200">
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Contactanos
                    </h2>
                    <div className="mt-4 flex flex-col md:flex-row">
                        <div className="md:w-1/2 md:pr-8">
                            <p className="mt-4 text-gray-600 w-[90%] text-justify">
                                Nos enorgullecemos de ser una empresa dedicada a la venta de artículos de camping con más de 10 años de experiencia en el mercado. Durante este tiempo, hemos trabajado incansablemente para brindar a nuestros clientes una amplia selección de productos de alta calidad y a precios competitivos.
                            </p>
                            <ul className="mt-8 text-gray-600">
                                <li className="flex">
                                    <svg
                                        className="h-6 w-6 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                    <span>Av. Hipólito Yrigoyen 1131</span>
                                </li>
                                <li className="flex mt-4">
                                    <svg
                                        className="h-6 w-6 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 16v-1.5c0-2.2-1.8-4-4-4s-4 1.8-4 4V16m8 0v-1.5c0-3.3-2.7-6-6-6s-6 2.7-6 6V16m12 0h-2v-1.5c0-1.4-.6-2.7-1.6-3.6-1-1-2.3-1.5-3.7-1.5s-2.7.5-3.7 1.5c-1 1-1.6 2.2-1.6 3.6V16H4v-4c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v4z"
                                        />
                                    </svg>
                                    <span>(+54) 11-6245-2347</span>
                                </li>
                                <li className="flex mt-4">
                                    <svg
                                        className="h-6 w-6 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 22l-2-2M12 18v-4M12 8v.01"
                                        />
                                    </svg>
                                    <span>info@elpolosur.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 md:mt-0 md:w-1/2">
                            <form>
                                <div className="shadow-sm">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Nombre y Apellido
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-8"
                                    />
                                </div>
                                <div className="mt-4 shadow-sm">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-8"
                                    />
                                </div>
                                <div className="mt-4 shadow-sm">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-8"
                                    ></textarea>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1341.353015215215!2d-58.3828783427246!3d-34.60983042770766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad07acdc555%3A0x2737c687bba4a779!2sAv.%20Hip%C3%B3lito%20Yrigoyen%201131%2C%20C1086AAS%20CABA!5e0!3m2!1ses-419!2sar!4v1680325184267!5m2!1ses-419!2sar" height="422" style={{ border: 0, width: '99vw' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='pt-14 bg-gray-200'>
                <Footer />
            </div>
        </div>
    );
}
export default Contacto