import React from 'react';
import NavBar from '../components/desktop/NavBar';
import Home from '../components/desktop/Home';
import ScrollButton from '../components/ScrollButton';
import Productos from '../components/desktop/Productos';
import Footer from '../components/desktop/Footer';

const Inicio = () => {
    return (
        <div className='relative font-Montserrat'>
            <div className='absolute top-0 left-0 w-full h-[100vh] bg-home bg-cover bg-center'>
                <div className='relative'>
                    <NavBar />
                    <ScrollButton />
                    <Home />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[7%] bg-black/80"></div>
            </div>
            <div className='pt-[calc(100vh*1)]'>
                <Productos />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Inicio;





   // <div className="relative bg-home h-screen w-full bg-cover bg-center">
        //     <div>
        //         <NavBar />
        //     </div>
        //     <div className="absolute bottom-0 left-0 w-full h-[7%] bg-black/80"></div>
        //     <div>
        //         <Home />
        //     </div>
        //     <div className='pt-[calc(100vh*0.55)] sm:pt-1/2 pb-10'>
        //         <Productos />
        //     </div>
        // </div>