import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import validator from "validator"
import notify from "../../../common/Notify"
import { registerUser } from "../../../redux/_actions/Auth/user.Action"

const FromRegister = () => {
  const refStep1 = useRef(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const submitRegister = async e => {
    e.preventDefault()
    const { Email, Password, ConfirmPassword, FullName } = refStep1.current
    const isEmail = validator.isEmail(Email.value)
    if (!isEmail) {
      notify("Email khong hop le")
      return
    }
    if (Password.value !== ConfirmPassword.value) {
      notify("Password khong hop le")
      return
    }
    const obj = {
      Email: Email.value,
      Password: Password.value,
      FullName: FullName.value
    }

    const res = await dispatch(registerUser(obj))
    console.log(`LHA:  ===> file: FromRegister.js ===> line 32 ===> res`, res)
    if (res === true) {
      history.push("/register/verify")
    }
  }
  const step1 = () => {
    return (
      <div className="login_part_form_iner">
        <h3>
          Welcome ! <br />
          Please Sign up now
        </h3>
        <form className="row contact_form" ref={refStep1}>
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
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="ConfirmPassword"
            />
          </div>
          <div className="col-md-12 form-group p_star">
            <input
              type="text"
              className="form-control"
              placeholder="FullName"
              name="FullName"
            />
          </div>
          <div className="col-md-12 form-group">
            <button
              type="submit"
              value="submit"
              className="btn_3"
              onClick={submitRegister}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className="col-lg-6 col-md-6">
      <div className="login_part_form">{step1()}</div>
    </div>
  )
}

export default FromRegister
