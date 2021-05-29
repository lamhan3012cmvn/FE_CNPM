import React, { useState } from "react"
import { Link } from "react-router-dom"
import Select, { components } from "react-select"
const CheckoutPage = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ]
  const handleChange = selectedOption => {
    setSelectionOption({ selectedOption })
    console.log(`Option selected:`, selectedOption)
  }
  const [selectedOption, setSelectionOption] = useState(null)
  return (
    <>
      <section className="checkout_area padding_top">
        <div className="container">
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form className="row contact_form">
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      name="name"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="First name"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      name="name"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Last name"
                    ></span>
                  </div>
                  {/* <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      placeholder="Company name"
                    />
                  </div> */}
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="number"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Phone number"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="compemailany"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Email Address"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <Select
                      value={(selectedOption || { value: "" }).value}
                      onChange={handleChange}
                      options={options}
                    />
                    {/* <select className="country_select">
                      <option value="1">District</option>
                      <option value="2">District</option>
                      <option value="4">District</option>
                    </select> */}
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add"
                      name="add"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Town/City"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <Select
                      value={(selectedOption || { value: "" }).value}
                      onChange={handleChange}
                      options={options}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <h3>Shipping Details</h3>
                    </div>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Order Notes"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <Link to="#">
                        Product
                        <span>Total</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Fresh Blackberry
                        <span className="middle">x 02</span>
                        <span className="last">$720.00</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Fresh Tomatoes
                        <span className="middle">x 02</span>
                        <span className="last">$720.00</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Fresh Brocoli
                        <span className="middle">x 02</span>
                        <span className="last">$720.00</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="list list_2">
                    <li>
                      <Link to="#">
                        Subtotal
                        <span>$2160.00</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Shipping
                        <span>Flat rate: $50.00</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Total
                        <span>$2210.00</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input type="radio" id="f-option5" name="selector" />
                      <label for="f-option5">COD</label>
                      <div className="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input type="radio" id="f-option6" name="selector" />
                      <label for="f-option6">Paypal </label>
                      <img src="img/product/single-product/card.jpg" alt="" />
                      <div className="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="creat_account">
                    <input type="checkbox" id="f-option4" name="selector" />
                    <label for="f-option4">I’ve read and accept the </label>
                    <Link to="#">terms & conditions*</Link>
                  </div>
                  <Link className="btn_3" to="#">
                    Proceed to Paypal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckoutPage
