import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemListContainer from './ItemListContainer'
import ProductCard from './ProductCard';

// Firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore"

const Productos = () => {

    const [camping, setCamping] = useState([])

    const q = query(collection(db, "camping"))

    useEffect(() => {
        const getCamping = async () => {
            const querySnapshot = await getDocs(q);
            const docs = []
            querySnapshot.forEach((doc) => {
                // console.log(doc.data())
                // console.log(doc.id, " => ", doc.data());
                docs.push({ ...doc.data(), id: doc.id })
            })
            setCamping(docs)
        }
        getCamping()
    }, [q])

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
                {camping.map(camping => {
                    return (
                        <div className='m-4 w-[25%] mx-auto'>
                            <ProductCard data={camping} />
                        </div>
                    )
                })}
            </div>
            <div>
                <ItemListContainer greeting="Buenas! Aca estoy para cumplir con la actividad. Soy el ItemListContainer" />
            </div>
        </div>
    )
}

export default Productos