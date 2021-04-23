import React from "react"

const FromRegister = () => {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="login_part_form">
        <div className="login_part_form_iner">
          <h3>
            Welcome ! <br />
            Please Sign up now
          </h3>
          <form className="row contact_form">
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
              <button type="submit" value="submit" className="btn_3">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FromRegister
