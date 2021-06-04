import React, { useRef, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { FormatNumberToMoney } from "../../../common/functions"
import CartApi from "../../../Apis/Cart.Api.js"
const CartBody = props => {
  const { cart } = props
  const [quantity, setQuantity] = useState(cart.total)

  // const [isActive, setIsActive] = useState(cart.isActive === "ACTIVE" || false)
  const handleChangeQuantity = () => {}
  const handleIncrement = () => {
    changeStatusProduct()
    setQuantity(quantity + 1)
  }
  const handleDecrement = () => {
    changeStatusProduct()
    setQuantity(quantity - 1)
  }
  const refQuantity = useRef()
  const refStatus = useRef(null)
  const price = cart.product.Price

  const totalPrice = () => {
    return FormatNumberToMoney(quantity * price)
  }

  const updateTimeoutRef = useRef(null)
  const changeStatusProduct = () => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current)
    }
    updateTimeoutRef.current = setTimeout(() => {
      const resBody = {
        total: quantity + 1,
        status: refStatus.current.checked ? "ACTIVE" : "INACTIVE",
        idProduct: cart.idProduct
      }
      CartApi.updateCartUser(resBody)
    }, 500)
  }
  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img
              src={
                cart.product &&
                cart.product.Image &&
                cart.product.Image.length > 0 &&
                cart.product.Image[0]
              }
              alt=""
            />
          </div>
          <div className="media-body">
            <p>{cart.product.Name}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{FormatNumberToMoney(~~price)}</h5>
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
        <input
          type="checkbox"
          onClick={changeStatusProduct}
          ref={refStatus}
          defaultChecked={cart.isActive === "ACTIVE" || false}
        />
      </td>
      <td>
        <button className="btn">Delete</button>
      </td>
    </tr>
  )
}

export default CartBody
