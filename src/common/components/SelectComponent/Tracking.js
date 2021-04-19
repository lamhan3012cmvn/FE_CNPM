import React from "react"

const Tracking = () => {
  return (
    <>
      <section class="tracking_box_area padding_top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="tracking_box_inner">
                <p>
                  To track your order please enter your Order ID in the box
                  below and press the "Track" button. This was given to you on
                  your receipt and in the confirmation email you should have
                  received.
                </p>
                <form
                  class="row tracking_form"
                  action="#"
                  method="post"
                  novalidate="novalidate"
                >
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="order"
                      name="order"
                      placeholder="Order ID"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Billing Email Address"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <button type="submit" value="submit" class="btn_3">
                      Track Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tracking
