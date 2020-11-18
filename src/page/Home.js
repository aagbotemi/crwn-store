import React from 'react'
import hats from '../shared/hat'

const Home = () => {

    const [id, title, price, img, amount] = hats
    //console.log(hats)
    return (
        <div>
    
            <ul key={id}>
                {title}
            </ul>
                    
              
        </div>
    )
}

export default Home
