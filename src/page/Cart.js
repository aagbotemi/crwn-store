import React from 'react'
import { useGlobalContext } from '../context/context'
import CartItem from '../components/CartItem'

const Cart = () => {
    const { cart, total, clearCart } = useGlobalContext()

    if (cart.length === 0) {
    return (
        <section className='text-center w-96 mx-10 md:mx-20'>
            {/* cart header */}
            <header>
            <h2 className='uppercase text-3xl font-bold mb-2'>your cart</h2>
            <h4 className='text-2xl'>is currently empty</h4>
            </header>
        </section>
        )
    }
    return (
        <section className='w-96 mx-20 md:mx-40'>
        {/* cart header */}
        <header>
            <h2 className='text-center uppercase text-3xl font-bold mb-5'>your cart</h2>
        </header>
        {/* cart items */}
        <div>
            {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
            })}
        </div>
        {/* cart footer */}
        <footer className='mb-5'>
            <hr />
            <h4 className='text-2xl text-right capitalize'>
                total <span>${total}</span>
            </h4>
            <div className='flex justify-around mt-4'>
                <button className='capitalize bg-red-500 text-white px-4 py-2 shadow-md rounded hover:bg-red-700 focus:outline-none focus:border-none' onClick={clearCart}>
                        clear cart
                </button>
                    
                <button className='capitalize bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 shadow-md focus:outline-none focus:border-none'>
                Pay Now
                </button>
            </div>
        </footer>
        </section>
    )
}
export default Cart
