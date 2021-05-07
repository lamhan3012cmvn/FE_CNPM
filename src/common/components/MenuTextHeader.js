import React from "react"
import { Link } from "react-router-dom"
import { PATH } from "../constants/path"

const MenuTextHeader = props => {
  const { FaBars } = props

  return (
    <div
      className={`collapse navbar-collapse main-menu-item 
      ${FaBars.toogle ? "show" : ""}`}
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        <li className="nav-item" onClick={FaBars.closeToogle}>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={PATH.category}>
            Shop category
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={PATH.interiorDesign}>
            Interior Design
          </Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link
            to="/"
            className="nav-link dropdown-toggle"
            id="navbarDropdown_1"
          >
            Shop
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={PATH.category}>
             
            </Link>
            <Link className="dropdown-item" to={PATH.singleProduct}>
              Product details
            </Link>
          </div>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to={PATH.contact}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuTextHeader
