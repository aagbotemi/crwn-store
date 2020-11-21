import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { useGlobalContext } from '../context/context'

const CartItem = ({ id, img, title, price, amount }) => {
    const { remove, toggleAmount } = useGlobalContext()

    return (
        <article className='flex justify-between gap-6 my-2'>
            <img src={img} alt={title} className='w-20 h-20 rounded-2xl object-cover'/>
            <h4 className='mt-6'>{title}</h4>
            <h4 className='mt-6'>${price}</h4>
            
            <div>
                <button className='hover:text-green-900 focus:outline-none focus:border-none' onClick={() => toggleAmount(id, 'inc')}>
                <FaAngleUp />
                </button>
                <p className='font-bold'>{amount}</p>
                <button className='hover:text-red-700 focus:outline-none focus:border-none' onClick={() => toggleAmount(id, 'dec')}>
                    <FaAngleDown />
                </button>
            </div>

            <div>
                <button className='mt-6 text-2xl text-gray-800 hover:text-red-700 focus:outline-none focus:border-none' onClick={() => remove(id)}>
                <ImCancelCircle />
                </button>
            </div>
        </article>
        
    )
}

export default CartItem
