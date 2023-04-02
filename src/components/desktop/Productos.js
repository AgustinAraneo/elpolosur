import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemListContainer from './ItemListContainer'
import CardList from './CardList';

const Productos = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-out',
            once: true
        });
    }, []);

    return (
        <div className='bg-zinc-700 h-full'>
            <div className='pt-20' data-aos="fade-down" data-aos-delay="500">
                <p className='text-3xl text-white text-center'>Conoce nuestros productos</p>
                <h1 className='text-5xl text-cyan-500 text-center mt-3 mb-3 font-bold'>MAS VENDIDOS</h1>
                <CardList />
            </div>
            <div>
                <ItemListContainer greeting="Buenas! Aca estoy para cumplir con la actividad. Soy el ItemListContainer" />
            </div>
        </div>
    )
}

export default Productos