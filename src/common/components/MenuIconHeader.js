import React from "react"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logoutUser } from "../../redux/_actions/Auth/user.Action"
import { PATH } from "../constants/path"

const MenuIconHeader = props => {
  const dispacth = useDispatch()
  const { onChange, isLogin, user } = props

  const handleLogout = () => {
    dispacth(logoutUser())
  }
  const renderUser = () => {
    return (
      <div className="dropdown-menu">
        <Link className="dropdown-item " to={PATH.login}>
          {user.fullName}
        </Link>
        <Link className="dropdown-item " to={PATH.cartArea}>
          shopping cart
        </Link>
        <Link className="dropdown-item " to={PATH.tracking}>
          tracking
        </Link>
        <Link className="dropdown-item " to={PATH.managerBill}>
          bill manager
        </Link>
        <Link className="dropdown-item " to="#" onClick={handleLogout}>
          Logout
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
        <Link className="dropdown-toggle icon" to="/cartArea">
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
