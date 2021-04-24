import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import validator from "validator"
import { registerUser } from "../../../redux/_actions/Auth/user.Action"

const FromRegister = () => {
  const [dataFrom, setDataFrom] = useState({})
  const refStep1 = useRef(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const [msg, setmsg] = useState("")
  const submitRegister = async e => {
    e.preventDefault()
    const { Email, Password, ConfirmPassword } = refStep1.current
    const isEmail = validator.isEmail(Email.value)
    if (!isEmail) {
      setmsg("Email khong hop le")
      return
    }
    if (Password.value !== ConfirmPassword.value) {
      setmsg("Password isValid")
    }
    const obj = {
      Email: Email.value,
      Password: Password.value
    }
    setDataFrom(obj)

    const res = await dispatch(registerUser(obj))
    if (res === true) {
      history.push("/")
    } else {
      //Notify
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
