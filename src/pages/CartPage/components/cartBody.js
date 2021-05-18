import React, { useRef, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { FormatNumberToMoney } from "../../../common/functions"
const CartBody = props => {
  const { cart } = props
  const [quantity, setQuantity] = useState(cart.total)
  const handleChangeQuantity = () => {}
  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrement = () => {
    setQuantity(quantity - 1)
  }
  const refQuantity = useRef()

  const price = cart.product.Price
  console.log(`LHA:  ===> file: cartBody.js ===> line 17 ===> price`, price)

  const totalPrice = () => {
    return FormatNumberToMoney(quantity * price)
  }
  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img src={cart.product.Image[0]} alt="" />
          </div>
          <div className="media-body">
            <p>{cart.product.Name}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{FormatNumberToMoney(cart.Price)}</h5>
      </td>
      <td>
        <div className="product_count">
          <button className="input-number-decrement" onClick={handleDecrement}>
            <FaAngleDown />
          </button>
          <input
            className="input-number"
            type="text"
            value={quantity}
            min="0"
            max="10"
            ref={refQuantity}
            onChange={handleChangeQuantity}
          />
          <button className="input-number-increment" onClick={handleIncrement}>
            <FaAngleUp />
          </button>
        </div>
      </td>
      <td>
        <h5>{totalPrice()}</h5>
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  )
}

export default CartBody
