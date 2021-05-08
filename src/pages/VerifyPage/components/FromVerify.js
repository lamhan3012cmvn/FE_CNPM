import React, { useRef, useState } from "react"

const FromVerify = () => {
  const refFormVerify = useRef()

  const submitVerify = () => {}
  const step = () => {
    return (
      <div className="login_part_form_iner">
        <h3>
          Welcome ! <br />
          Please Sign up now
        </h3>
        <form className="row contact_form" ref={refFormVerify}>
          <div className="col-md-12 form-group p_star">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="Email"
            />
          </div>
          <div className="col-md-12 form-group p_star">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="Password"
            />
          </div>

          <div className="col-md-12 form-group p_star">
            <input
              type="text"
              className="form-control"
              placeholder="Code Otp"
              name="otp"
            />
          </div>
          <div className="col-md-12 form-group">
            <button
              type="submit"
              value="submit"
              className="btn_3"
              onClick={submitVerify}
            >
              Verify Account
            </button>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className="col-lg-6 col-md-6">
      <div className="login_part_form">{step()}</div>
    </div>
  )
}

export default FromVerify
