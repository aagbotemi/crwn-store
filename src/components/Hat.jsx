import React, { useState } from 'react'
import hats from '../shared/hat'
import { useGlobalContext } from '../context/context'

const Hat = () => {
    const { cart, toggleAmount } = useGlobalContext()

    return (
        <section className="m-10">
            <h1 className="text-3xl">HATS</h1>
            <article className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2">
                {hats.map((hat) => {
                    const { id, title, price, img, amount } = hat
                    //console.log(title);
                    return (
                        <div key ={id} className="">
                            <div className="cart relative m-1 hover:shadow rounded border hover">
                                <img src={img}
                                    alt="hat" 
                                    className="flex w-full object-cover" 
                                />
                                <div className="flex m-3 pb-1" >
                                    <p>{title}</p>
                                    <p className="ml-auto">&#36;{price}</p>
                                </div>
                                <button className="btn absolute bg-white p-2 font-bold" onClick={() => toggleAmount(id, 'inc')}>
                                    ADD TO CART
                                </button>
                            </div>

                        </div>
                    )
                }) }
            </article>
        </section>
    )
}

export default Hat
