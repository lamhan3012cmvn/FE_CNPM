import React from "react"
import { Link } from "react-router-dom"
const LoginRegisterPart = props => {
  const { title, content, link, txtLink } = props
  return (
    <div className="col-lg-6 col-md-6">
      <div className="login_part_text text-center">
        <div className="login_part_text_iner">
          <h2>{title}</h2>
          <p>{content}</p>
          <Link to={link} className="btn_3">
            {txtLink}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginRegisterPart
