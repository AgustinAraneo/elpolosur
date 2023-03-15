import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from './ProductCard'
import ItemListContainer from './ItemListContainer'

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
            <div className='pt-20' data-aos="fade-down" data-aos-delay="300">
                <p className='text-2xl text-white text-center'>Conoce nuestros productos</p>
                <h1 className='text-4xl text-cyan-500 text-center mt-3 font-bold'>MAS VENDIDOS</h1>
            </div>
            <div className='flex flex-col mt-20 gap-y-4' data-aos="fade" data-aos-delay="700">
                <ProductCard
                    image="https://www.nakaoutdoors.com.ar/img/articulos/2023/01/naturehike_65_5l_2_thumb1.jpg"
                    name="Mochila de Camping"
                    company="Naturehike"
                    description="Mochila ideal para backpacking, gracias a su gran capacidad y cómodo espaldar"
                    price="$65.754" />
                <ProductCard
                    image="https://www.nakaoutdoors.com.ar/img/articulos/naturehike_nh01_down_sleeping_bag_5_c_thumb1.jpg"
                    name="Bolsa de Dormir"
                    company="Naturehike"
                    description="Bolsa de dormir tipo sobre con relleno de duvet ideal para temperaturas entre los 10℃ y 5℃"
                    price="$114.339" />
                <ProductCard
                    image="https://www.nakaoutdoors.com.ar/img/articulos/2022/12/national_geographic_ottawa_carpa_6_personas_thumb1.jpg"
                    name="Carpa Iglú"
                    company="National Geographic"
                    description="Carpa iglú modelo Ottawa, diseañada para 6 personas"
                    price="$80.360" />
            </div>
            <div>
                <ItemListContainer greeting="Buenas! Aca estoy para cumplir con la actividad. Soy el ItemListContainer" />
            </div>
        </div>
    )
}

export default Productos