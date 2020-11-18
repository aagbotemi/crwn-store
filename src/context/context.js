import React, { useState, useContext, useReducer, useEffect } from 'react'
import HATS from '../shared/hat'
import JACKETS from '../shared/jacket'
import MENS_CLOTHING from '../shared/men'
import SNEAKERS from '../shared/sneaker'
import WOMENS_CLOTHING from '../shared/women'
//import reducer from './reducer'

const AppContext = React.createContext();

const initialState = {
    loading: false,
    //cart: cartItems,
    total: 0,
    amount: 0,
}

export const AppProvider = ({ children }) => {
    //const [state, dispatch] = useReducer(reducer, initialState)
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const openSidebar = () => {
    //     setIsSidebarOpen(true)
    // }
    // const closeSidebar = () => {
    //     setIsSidebarOpen(false)
    // }

    // const clearCart = () => {
    //     dispatch({ type: 'CLEAR_CART' })
    // }
    // const remove = (id) => {
    //     dispatch({ type: 'REMOVE', payload: id })
    // }
    // const increase = (id) => {
    //     dispatch({ type: 'INCREASE', payload: id })
    // }
    // const decrease = (id) => {
    //     dispatch({ type: 'DECREASE', payload: id })
    // }
    // const fetchData = async () => {
    //     dispatch({ type: 'LOADING' })
    //     // const response = await fetch(url)
    //     // const cart = await response.json()
    //     // dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    // }
    // const toggleAmount = (id, type) => {
    //     dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     dispatch({ type: 'GET_TOTALS' })
    // }, [state.cart])
    
    
    return (
        <AppContext.Provider
        value={{
            // ...state,
            // isSidebarOpen,
            // openSidebar,
            // closeSidebar,
            // clearCart,
            // remove,
            // increase,
            // decrease,
            // toggleAmount,
        }}
        >
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}