import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const CartItem = ({product}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    const img = {
        margin: "0 auto",
        maxWidth: "100px",
        maxHeight: "100px",
        borderRadius: "50%"
    }

    return (
        <div className="row no-gutters py-2 font-smaller">
            <div className="d-flex align-items-center">
                <img
                    alt={product.name}
                    style={img} 
                    src={product.img} className="img-fluid d-block"
                />
                <div>
                    <p className="mb-0">{product.title}</p>
                    <h6>Price: {formatNumber(product.price)} </h6>
                </div>
                <p>Qty: {product.quantity}</p>
                {/****div tag for increase, reduce and delete button */}
                <div>
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-primary btn-sm mr-2 mb-1">
                        <PlusCircleIcon width={"20px"}/>
                    </button>

                    {
                        product.quantity > 1 &&
                        <button
                    onClick={() => decrease(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <MinusCircleIcon width={"20px"}/>
                    </button>
                    }
                    {
                        product.quantity === 1 &&
                        <button
                        onClick={() => removeProduct(product)}
                        className="btn btn-danger btn-sm mb-1">
                            <TrashIcon width={"20px"}/>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default CartItem;