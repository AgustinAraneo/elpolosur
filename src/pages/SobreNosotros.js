import React from 'react'
import NavBar from '../components/desktop/NavBar'
import Footer from '../components/desktop/Footer'

const SobreNosotros = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-cyan-500 font-semibold tracking-wide uppercase">Quiénes somos</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Proveedores de artículos de camping
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Somos una empresa especializada en la venta de artículos para camping, con más de una década de experiencia en el mercado. Durante este tiempo, hemos perfeccionado nuestros procesos y ampliado nuestra gama de productos para ofrecer a nuestros clientes la mejor selección de equipamiento para sus aventuras al aire libre.
                        </p>
                    </div>

                    <div className="mt-20">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M22 12h-4l-3 9L9 3l-3 9H2"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Misión</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Nuestra misión es brindar a nuestros clientes una amplia selección de productos de alta calidad para el camping, así como un excelente servicio al cliente y asesoramiento experto en todo lo relacionado con esta actividad al aire libre.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Visión</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Nuestra visión es convertirnos en el proveedor líder de artículos para camping en el mercado, ofreciendo siempre productos de alta calidad, una amplia selección de opciones y un servicio al cliente excepcional.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default SobreNosotros