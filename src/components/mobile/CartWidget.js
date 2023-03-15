import React from 'react';
import { BsCartPlus } from 'react-icons/bs';

function CartWidget() {
    return (
        <div className="flex items-center">
            <BsCartPlus className="h-8 w-8 text-white cursor-pointer" />
            <span className="bg-red-500 text-white rounded-full h-5 w-5 ml-1 flex items-center justify-center text-sm font-Montserrat">
                3
            </span>
        </div>
    );
}

export default CartWidget;
