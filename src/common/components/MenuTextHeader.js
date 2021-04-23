import React from "react"
import { Link } from "react-router-dom"
import { PATH } from "../constants/path"

const MenuTextHeader = () => {
  return (
    <div
      className="collapse navbar-collapse main-menu-item"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            to="/"
            className="nav-link dropdown-toggle"
            id="navbarDropdown_1"
          >
            Shop
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={PATH.category}>
              Shop category
            </Link>
            <Link className="dropdown-item" to={PATH.singleProduct}>
              Product details
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuTextHeader
