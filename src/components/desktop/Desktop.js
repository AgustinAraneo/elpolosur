import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import ScrollButton from '../ScrollButton';
import Productos from './Productos';
import Footer from './Footer';

const Desktop = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 w-full h-[100vh] bg-home bg-cover bg-center'>
                <div className='relative'>
                    <NavBar style={{ zIndex: 20 }} />
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

export default Desktop;





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