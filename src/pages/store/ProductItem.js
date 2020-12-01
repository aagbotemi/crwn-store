import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    const img = {
        display: "block",
        margin: "0 auto 10px",
        maxHeight: "200px"
    }
    
    return ( 
        <div className="card card-body col-md-4  col-md-4 col-sm-6 w-full mb-4">
            <img style={img} className="img-fluid" 
                src={product.img + '?v=' + product.id} alt="" />
            <div>
                <p>{product.title}</p>
                <h4 className="text-left">{formatNumber(product.price)}</h4>
            </div>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
                
            </div>
        </div>
    );
}
 
export default ProductItem;