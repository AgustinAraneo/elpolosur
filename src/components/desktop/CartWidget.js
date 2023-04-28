import React, { useContext } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { cartArray } = useContext(CartContext);

  return (
    <div className="flex items-center font-Montserrat">
      <BsCartPlus className="w-8 h-8 text-white cursor-pointer hover:text-gray-400" />
      <span className="flex items-center justify-center w-5 h-5 ml-1 text-sm text-white bg-red-500 rounded-full font-Montserrat">
        {cartArray.length}
      </span>
    </div>
  );
}

export default CartWidget;
