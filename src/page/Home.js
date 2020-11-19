import React, { useState } from 'react'
import hats from '../shared/hat'

//console.log(hats)

const Home = () => {
    //const [hat, setHat] = useState(hats)

    // const {id, title, price, img, amount} = hats

    console.log(hats)

    // grid   grid-flow-col grid-cols-3  gap-1
    // md:grid-rows-4 grid-rows-6

    return (
        <section className="m-5">
            <h1 className="text-3xl">HATS</h1>
            <article className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2">
                {hats.map((hat) => {
                    const { id, title, price, img, amount } = hat
                    //console.log(title);
                    return (
                        <div className="">
                            <div className="relative m-1 hover:shadow rounded border">
                                <img src={img}
                                    alt="hat" className="flex w-full object-cover" />
                                
                                {/* md:row-span-3 */}
                                <div className="flex m-3 pb-1" >
                                    <p>{title}</p>
                                    <p className="ml-auto">&#36;{price}</p>
                                </div>
                                <h3 className="cart absolute bg-gray-700 w-1/3 text-center rounded p-3">ADD TO CART</h3>
                            </div>

                        </div>
                    )
                }) }
            </article>
        </section>
    )
}

export default Home
