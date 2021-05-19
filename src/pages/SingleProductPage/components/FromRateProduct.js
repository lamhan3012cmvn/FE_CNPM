import React, { useState } from "react"
import RateProduct from "./RateProduct"

const FromRateProduct = () => {
  const [listRate, setListRate] = useState([true, true, true, true, true])

  const handleChangeRate = star => {
    const arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(i <= star ? true : false)
    }
    setListRate(arr)
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
          action="contact_process.php"
          method="post"
          id="contactForm"
          novalidate="novalidate"
        >
          <div className="col-md-12">
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
          </div>
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
            <button type="submit" value="submit" className="btn submit_btn">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FromRateProduct
