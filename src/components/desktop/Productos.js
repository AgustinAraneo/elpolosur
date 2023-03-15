import React from 'react'
import ProductCard from './ProductCard'
import ItemListContainer from './ItemListContainer'

const Productos = () => {
    return (
        <div className='bg-zinc-700 h-screen'>
            <div className='pt-20'>
                <p className='text-3xl text-white text-center'>Conoce nuestros productos</p>
                <h1 className='text-5xl text-indigo-500 text-center mt-3 font-bold'>MAS VENDIDOS</h1>
            </div>
            <div className='flex grid-cols-3 mt-20'>
                <ProductCard
                    image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    name="Mochila táctica"
                    category="Mochilas"
                    description="Es una mochila tactica"
                    price="$13.500" />
                <ProductCard
                    image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    name="Mochila táctica"
                    category="Mochilas"
                    description="Es una mochila tactica"
                    price="$13.500" />
                <ProductCard
                    image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    name="Mochila táctica"
                    category="Mochilas"
                    description="Es una mochila tactica"
                    price="$13.500" />
            </div>
            <div>
                <ItemListContainer greeting="Buenas! Aca estoy para cumplir con la actividad. Soy el ItemListContainer" />
            </div>
        </div>
    )
}

export default Productos