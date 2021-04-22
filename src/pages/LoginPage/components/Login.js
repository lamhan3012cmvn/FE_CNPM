import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../../../redux/_actions/Auth/user.Action"
import { Link } from "react-router-dom"
import { PATH } from "../../../common/contants/path"
import { useHistory } from "react-router-dom"
const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const login = async e => {
    e.preventDefault()
    const email = e.target.username.value
    const password = e.target.password.value
    const res = await dispatch(loginUser({ email, password }))
    if (res.payload && res.payload.userId) {
      history.push("/")
      return
    }
  }

  return (
    <section className="login_part padding_top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="login_part_text text-center">
              <div className="login_part_text_iner">
                <h2>New to our Shop?</h2>
                <p>
                  There are advances being made in science and technology
                  everyday, and a good example of this is the
                </p>
                <Link to={PATH.register} className="btn_3">
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  )
}

export default Login
