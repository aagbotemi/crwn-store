import React from 'react'
import sneakers from '../shared/sneaker'

const Sneaker = () => {
    return (
        <section className="m-10 my-10">
            <h1 className="text-3xl">SNEAKERS</h1>
            <article className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2">
                {sneakers.map((sneaker) => {
                    const { id, title, price, img } = sneaker
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
                                <button className="btn absolute bg-white p-2 font-bold">
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

export default Sneaker
