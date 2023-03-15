import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 2500,
            easing: 'ease-out',
            once: true
        });
    }, []);

    return (
        <div className='font-Montserrat text-white text-center mt-[20%]' data-aos="fade-down">
            <p className='text-2xl mb-3'>Vive intensamente,</p>
            <h1 className='uppercase text-5xl font-bold'>planea tu aventura</h1>
        </div>
    )
}

export default Home