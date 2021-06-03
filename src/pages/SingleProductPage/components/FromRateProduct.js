import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { rateProduct } from "../../../redux/_actions/Product/Category/category.Action"
import validate from "../hooks/validate"
import RateProduct from "./RateProduct"

const FromRateProduct = ({ idProduct }) => {
  const dispatch = useDispatch()
  const [listRate, setListRate] = useState([true, true, true, true, true])

  const handleChangeRate = star => {
    const arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(i <= star ? true : false)
    }
    setListRate(arr)
  }
  const countStar = listRate.reduce((t, v) => {
    return t + (v === true ? 1 : 0)
  }, 0)
  const refForm = useRef(null)
  const submitRate = e => {
    e.preventDefault()
    const current = refForm.current
    const isValidate = validate(current.message.value)
    if (isValidate === false) return
    dispatch(rateProduct(idProduct, countStar + "", current.message.value))
  }
  return (
    <div className="col-lg-6">
      <div className="review_box">
        <h4>Add a Review</h4>
        <p>Your Rating:</p>
        <RateProduct listRate={listRate} onChange={handleChangeRate} />
        <p>Outstanding</p>
        <form
          className="row contact_form"
          id="contactForm"
          ref={refForm}
          onSubmit={submitRate}
        >
          {/* <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Full name"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="number"
                name="number"
                placeholder="Phone Number"
              />
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="1"
                placeholder="Review"
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 text-right">
            <button
              type="submit"
              value="submit"
              className="btn submit_btn"
              style={{
                color: "#000"
              }}
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FromRateProduct
