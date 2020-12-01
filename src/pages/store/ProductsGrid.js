import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {
    const { products } = useContext(ProductsContext)

    return ( 
        <div>
            <div className="row mt-5">
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductsGrid;