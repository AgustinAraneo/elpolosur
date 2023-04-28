import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"

const ProductCard = ({ data }) => {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const { addToCart, cartArray } = useContext(CartContext);

  const existingProduct = (productId) => {
    return cartArray.some(item => item.product.id === productId);
  };

  const handleAddToCart = () => {
    if (existingProduct(data.id)) {
      setErrorMessage('El producto ya está en el carrito.');
    } else {
      addToCart(data, count);
      setCount(1);
      setMessage('El producto se ha añadido al carrito correctamente.');
    }
    setTimeout(() => setMessage(''), 2000);
    setTimeout(() => setErrorMessage(''), 2000);
  };

  return (
    <div className="flex items-center mt-4 mb-4 overflow-hidden rounded-lg shadow-md bg-zinc-200 w-[35%] font-Montserrat">
      <div className="w-1/2 h-auto">
        <img
          className="object-cover w-full h-[25rem]"
          src={data.img}
          alt={data.name}
        />
      </div>
      <div className="w-1/2 p-6">
        <h3 className="mb-2 text-2xl font-bold text-cyan-500">{data.name}</h3>
        <p className="mb-2 text-base text-gray-700">Marca: {data.brand}</p>
        <p className="mb-2 text-base text-gray-700">Categoría: {data.category}</p>
        <p className="mb-4 text-3xl font-bold text-gray-700">${data.price}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-auto w-32">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="quantity"
            >
              Cantidad:
            </label>
            <input
              className="px-3 py-2 m-4 leading-tight text-gray-700 border-2 border-indigo-500 rounded appearance-none w-14 focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              min={1}
              max={10}
            />
          </div>
        </div>
        <button
          className="px-6 py-2 text-sm font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
        {errorMessage && <p className="text-red-500 py-2 text-sm font-bold text-center bg-red-300/40 m-2 rounded-full">{errorMessage}</p>}
        {message && <p className="text-green-500 py-2 text-sm font-bold text-center bg-green-300/40 m-2 rounded-full">{message}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
