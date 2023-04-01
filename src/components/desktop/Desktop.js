import React from 'react';
import Inicio from '../../pages/Inicio';
import Productos from '../../pages/Productos';
import SobreNosotros from '../../pages/SobreNosotros';
import Contacto from '../../pages/Contacto';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Desktop = () => {
    return (
        <Router>

            <div>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/sobreNosotros" element={<SobreNosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </Router>
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