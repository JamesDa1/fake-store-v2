import React from "react"
import { HiPlusSm, HiMinus } from "react-icons/hi"
import { useGlobalContext } from "../contextAPI/context"

const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext()
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4 className="item-title">{title}</h4>
        <h4 className="item-price">
          ${price * amount} (${price})
        </h4>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="changeQuantity">
        <button className="amount-btn" onClick={() => increase(id)}>
          <HiPlusSm />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decrease(id)}>
          <HiMinus />
        </button>
      </div>
    </article>
  )
}

export default CartItem
