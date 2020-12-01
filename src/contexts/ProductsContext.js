import React, { createContext, useState } from 'react';
import { data } from '../services/data';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    const [products] = useState(data);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;