import React, { createContext, useReducer, useState } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext()

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    
    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }
    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }
    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }
    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }
    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }
    const handleCheckout = () => {
        dispatch({type: 'CHECKOUT'})
    }

    return ( 
        <CartContext.Provider
            value={{
                ...state,
                removeProduct,
                addProduct,
                increase,
                decrease,
                clearCart,
                handleCheckout,
                isModalOpen,
                openModal,
                closeModal,
            }}
        >
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;