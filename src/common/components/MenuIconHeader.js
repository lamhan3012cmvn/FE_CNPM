import React from "react"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { PATH } from "../constants/path"

const MenuIconHeader = props => {
  const { onChange, isLogin, user } = props
  console.log(`LHA:  ===> file: MenuIconHeader.js ===> line 10 ===> user`, user)

  const renderUser = () => {
    return (
      <div className="dropdown-menu" style={{ marginTop: "35px" }}>
        <Link className="dropdown-item " to={PATH.login}>
          {user.fullName}aaa
        </Link>
        <Link className="dropdown-item " to={PATH.tracking}>
          tracking
        </Link>
        <Link className="dropdown-item " to={PATH.cartArea}>
          shopping cart
        </Link>
        <Link className="dropdown-item " to={PATH.confirmation}>
          confirmation
        </Link>
      </div>
    )
  }
  return (
    <div className="hearer_icon d-flex">
      <Link onClick={onChange} className="icon" to="#">
        <FiSearch />
      </Link>
      <Link to="/" className="icon">
        <AiOutlineHeart />
      </Link>
      <div className="dropdown cart">
        <Link className="dropdown-toggle icon" to="#">
          <FaCartPlus />
        </Link>
        <div className="single_product"></div>
      </div>
      <div className="dropdown cart">
        <Link className="dropdown-toggle icon" to={PATH.login}>
          <AiOutlineUser />
        </Link>
        {isLogin && renderUser()}
      </div>
    </div>
  )
}

export default MenuIconHeader
