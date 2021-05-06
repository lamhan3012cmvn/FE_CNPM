/* eslint-disable no-console */
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { loginUser } from "../../../redux/_actions/Auth/user.Action"

const FromLogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const login = async e => {
    e.preventDefault()
    const email = e.target.username.value
    const password = e.target.password.value
    const res = dispatch(loginUser({ email, password }))
    if (res) {
      history.push("/")
      return
    }
  }
  return (
    <div className="col-lg-6 col-md-6">
      <div className="login_part_form">
        <div className="login_part_form_iner">
          <h3>
            Welcome Back ! <br />
            Please Sign in now
          </h3>
          <form className="row contact_form" onSubmit={login}>
            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                required
              />
            </div>
            <div className="col-md-12 form-group p_star">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <div className="creat_account d-flex align-items-center">
                <input type="checkbox" id="f-option" name="selector" />
                <label html-for="f-option">Remember me</label>
              </div>
              <button type="submit" value="submit" className="btn_3">
                log in
              </button>
              <Link className="lost_pass" to="/">
                forget password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FromLogin
