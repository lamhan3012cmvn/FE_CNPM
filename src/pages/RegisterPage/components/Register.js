import { Link } from "react-router-dom"
import { PATH } from "../../../common/contants/path"
const Register = () => {
  return (
    <section className="login_part padding_top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="login_part_form">
              <div className="login_part_form_iner">
                <h3>
                  Welcome ! <br />
                  Please Sign up now
                </h3>
                <form className="row contact_form" novalidate="novalidate">
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    {/* <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div> */}
                    <button type="submit" value="submit" className="btn_3">
                      Sign up
                    </button>
                    {/* <a className="lost_pass" href="#">
                        forget password?
                      </a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="login_part_text text-center">
              <div className="login_part_text_iner">
                <h2>One of us?</h2>
                <p>
                  If you already has an account, just sign in. We've missed you!
                </p>
                <Link to={PATH.login} className="btn_3">
                  Sign In Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
