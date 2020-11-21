import React, { useState } from 'react';
import Hat from '../components/Hat'
import Sneaker from '../components/Sneaker'
import Jacket from '../components/Jacket'
import Men from '../components/Men'
import Women from '../components/Women'

const Shop = () => {
    return (
        <section>
            <Hat />
            <Sneaker />
            <Jacket />
            <Men />
            <Women />
            
        </section>
    )
}

export default Shop;