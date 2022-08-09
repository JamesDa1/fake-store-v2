import React from "react"
import CartItem from "../components/CartItem"
import { useGlobalContext } from "../contextAPI/context"
const CartPage = () => {
  const { cart, total, clearCart } = useGlobalContext()

  // checks if Cart is empty
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2 className="pageTitle">Your shopping cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2 className="pageTitle">Your shopping cart</h2>
      </header>
      <div className="shoppingCart">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total: <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartPage
