import React from "react"
import { Link } from "react-router-dom"

const CartArea = () => {
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="img/product/single-product/cart-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <p>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>$360.00</h5>
                  </td>
                  <td>
                    <div className="product_count">
                      <span className="input-number-decrement">
                        {" "}
                        <i className="ti-angle-down"></i>
                      </span>
                      <input
                        className="input-number"
                        type="text"
                        value="1"
                        min="0"
                        max="10"
                      />
                      <span className="input-number-increment">
                        {" "}
                        <i className="ti-angle-up"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <h5>$720.00</h5>
                  </td>
                </tr>
                <tr className="bottom_button">
                  <td>
                    <Link className="btn_1" to="#">
                      Update Cart
                    </Link>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="cupon_text float-right">
                      <Link className="btn_1" to="#">
                        Close Coupon
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>$2160.00</h5>
                  </td>
                </tr>
                <tr className="shipping_area">
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className="shipping_box">
                      <ul className="list">
                        <li>
                          <Link to="#">Flat Rate: $5.00</Link>
                        </li>
                        <li>
                          <Link to="#">Free Shipping</Link>
                        </li>
                        <li>
                          <Link to="#">Flat Rate: $10.00</Link>
                        </li>
                        <li className="active">
                          <Link to="#">Local Delivery: $2.00</Link>
                        </li>
                      </ul>
                      <h6>
                        Calculate Shipping
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </h6>
                      <select className="shipping_select">
                        <option value="1">Bangladesh</option>
                        <option value="2">India</option>
                        <option value="4">Pakistan</option>
                      </select>
                      <select className="shipping_select section_bg">
                        <option value="1">Select a State</option>
                        <option value="2">Select a State</option>
                        <option value="4">Select a State</option>
                      </select>
                      <input type="text" placeholder="Postcode/Zipcode" />
                      <Link className="btn_1" to="#">
                        Update Details
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="checkout_btn_inner float-right">
              <Link className="btn_1" to="#">
                Continue Shopping
              </Link>
              <Link className="btn_1 checkout_btn_1" to="#">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartArea
