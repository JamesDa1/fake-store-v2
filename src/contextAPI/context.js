import React, { useEffect, useContext, useReducer } from "react"
import reducer from "./reducer"
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: [
    {
      amount: 1,
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
  ],
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
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id })
  }

  // Fetch data
  const retrieveCart = () => {
    // toggles loading while the data is being fetched
    dispatch({ type: "LOADING" })
    dispatch({ type: "DISPLAY_ITEMS", payload: state.cart })
  }

  // Runs on page load
  // hides the missing dependency error message
  useEffect(() => {
    retrieveCart()
    // eslint-disable-next-line
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
        removeItem,
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
