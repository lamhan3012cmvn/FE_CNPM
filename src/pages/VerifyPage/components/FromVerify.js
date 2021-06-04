import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { verifyUser } from "../../../redux/_actions/Auth/user.Action"
import validate from "../hooks/validate"

const FromVerify = () => {
  const refFormVerify = useRef()
  const dispatch = useDispatch()
  const history = useHistory()

  const submitVerify = async e => {
    e.preventDefault()
    const { Email, Password, Otp } = refFormVerify.current
    const isValidate = validate(Email.value, Password.value, Otp.value)
    if (isValidate === false) return

    const res = await dispatch(verifyUser(isValidate))
    if (res === true) {
      history.push("/")
    }
  }
  const step = () => {
    return (
      <div className="login_part_form_iner">
        <h3>
          Welcome ! <br />
          Please Verify now
        </h3>
        <form
          className="row contact_form"
          ref={refFormVerify}
          onSubmit={submitVerify}
        >
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
              name="Otp"
            />
          </div>
          <div className="col-md-12 form-group">
            <button type="submit" value="submit" className="btn_3">
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
