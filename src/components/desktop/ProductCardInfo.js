import React from "react";

const ProductCardInfo = ({ data }) => {
    return (
        <div className="flex-1 max-w-md mx-auto bg-zinc-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl font-Montserrat h-[18rem] mb-20">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img
                        className="object-cover w-full h-[18rem] md:w-48"
                        src={data.img}
                        alt={data.name}
                    />
                </div>
                <div className="p-8">
                    <div className="text-lg font-semibold tracking-wide uppercase text-cyan-500">
                        {data.name}
                    </div>
                    <p className="block mt-1 text-lg font-medium leading-tight text-black">
                        Marca: {data.brand}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">Categoría: {data.category}</p>
                    <p className="mt-2 text-xl font-bold text-gray-500">${data.price}</p>
                    <p className="text-sm font-semibold tracking-wide uppercase text-cyan-500">Obten mas info</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCardInfo;
