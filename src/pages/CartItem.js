import React from "react"
import { HiPlusSm, HiMinus } from "react-icons/hi"

import { useGlobalContext } from "../store/context"
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="changeQuantity">
        <button className="amount-btn" onClick={() => increase(id)}>
          <HiPlusSm />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decrease(id)}>
          <HiMinus />
        </button>
      </div>
    </article>
  )
}

export default CartItem
