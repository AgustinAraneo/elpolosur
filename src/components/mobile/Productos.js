import React from 'react'
import ProductCard from './ProductCard'
import ItemListContainer from './ItemListContainer'

const Productos = () => {
    return (
        <div className='bg-zinc-700 h-full'>
            <div className='pt-20'>
                <p className='text-2xl text-white text-center'>Conoce nuestros productos</p>
                <h1 className='text-4xl text-indigo-500 text-center mt-3 font-bold'>MAS VENDIDOS</h1>
            </div>
            <div className='flex flex-col mt-20 gap-y-4'>
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