import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartBody from "../../pages/CartPage/components/cartBody"
import { createBillApi } from "../../redux/_actions/BillManager/billManager.Action"
import { getCartUserApi } from "../../redux/_actions/Cart/cart.Action"
import { PATH } from "../constants/path"
import { FormatNumberToMoney } from "../functions"

const totalPrice = (carts = []) => {
  return carts.reduce((t, vCart) => {
    return t + vCart.product.Price * vCart.total
  }, 0)
}
const CartArea = () => {
  const dispatch = useDispatch()
  const carts = useSelector(state => state.cart.cartUser) || []
  useEffect(() => {
    dispatch(getCartUserApi())
  }, [dispatch])

  const handlePayBill = () => {
    dispatch(createBillApi())
  }
  return (
    <section className="cart_area padding_top">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Check</th>
                </tr>
              </thead>
              <tbody>
                {carts.length > 0 &&
                  carts.map(elm => <CartBody key={elm._id} cart={elm} />)}
                {carts.length > 0 && (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>{FormatNumberToMoney(totalPrice(carts))}</h5>
                    </td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="checkout_btn_inner float-right">
              <Link className="btn_1 mr-15" to={PATH.category}>
                Continue Shopping
              </Link>
              <button
                className="btn btn_1 ml-15 checkout_btn_1"
                onClick={handlePayBill}
              >
                Pay the bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartArea
