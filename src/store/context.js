import React, { useState, useEffect, useContext, useReducer } from "react"
import reducer from "./reducer"
const url = "https://fakestoreapi.com/products"
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }
  // Needs ID to target the specified product
  const remove = (id) => {
    dispatch({ type: "REMOVE" })
  }

  const increase = (id) => {
    dispatch({ type: "INCREASE" })
  }
  const decrease = (id) => {
    dispatch({ type: "DECREASE" })
  }

  // Fetch data
  const fetchData = () => {
    // toggles loading while the data is being fetched
    dispatch({ type: "LOADING" })
    dispatch({ type: "DISPLAY_ITEMS", payload: state.cart })
    console.log("fetchData is potential cause of error")
  }

  // Runs on page load
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" })
  }, [state.cart])

  // Returning the Provider
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        addItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Make sure to use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
