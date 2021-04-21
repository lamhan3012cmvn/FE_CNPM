import logo from "../../img/logo.png"
import { FaBars, FaCartPlus } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import {
  AiOutlineHeart,
  AiOutlineCloseCircle,
  AiOutlineUser
} from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"
import { PATH } from "../../common/contants/path"
const AppHeader = () => {
  const [modalSearch, setModalSearch] = useState(false)
  const changeSearch = () => {
    setModalSearch(!modalSearch)
  }
  return (
    <>
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler">
                  <span className="menu_icon">
                    <FaBars />
                  </span>
                </button>
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
                    {/*                     
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown_3"
                      >
                        pages
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" href="\login">
                          login
                        </Link>
                        <Link className="dropdown-item" href="tracking.html">
                          tracking
                        </Link>
                        <Link className="dropdown-item" href="checkout.html">
                          product checkout
                        </Link>
                        <Link className="dropdown-item" href="cart.html">
                          shopping cart
                        </Link>
                        <Link
                          className="dropdown-item"
                          href="confirmation.html"
                        >
                          confirmation
                        </Link>
                        <Link className="dropdown-item" href="elements.html">
                          elements
                        </Link>
                      </div>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown_2"
                      >
                        blog
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" href="blog.html">
                          blog
                        </Link>
                        <Link className="dropdown-item" href="single-blog.html">
                          Single blog
                        </Link>
                      </div>
                    </li> */}

                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hearer_icon d-flex">
                  <Link onClick={changeSearch}>
                    <FiSearch />
                  </Link>
                  <Link to="/">
                    <AiOutlineHeart />
                  </Link>
                  <div className="dropdown cart">
                    <Link className="dropdown-toggle">
                      <FaCartPlus />
                    </Link>
                    <div className="single_product"></div>
                  </div>
                  <div className="dropdown cart">
                    <Link className="dropdown-toggle">
                      <AiOutlineUser />
                    </Link>
                    <div
                      className="dropdown-menu"
                      style={{ marginTop: "35px" }}
                    >
                      <Link className="dropdown-item" to={PATH.login}>
                        Login
                      </Link>
                      <Link className="dropdown-item" to={PATH.tracking}>
                        tracking
                      </Link>
                      {/* <Link className="dropdown-item" to={PATH.che}>
                        product checkout
                      </Link> */}
                      <Link className="dropdown-item" to={PATH.cartArea}>
                        shopping cart
                      </Link>
                      <Link className="dropdown-item" hto={PATH.confirmation}>
                        confirmation
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {modalSearch && (
          <div className="search_input" id="search_input_box">
            <div className="container ">
              <form className="d-flex justify-content-between search-inner">
                <input
                  type="text"
                  className="form-control"
                  id="search_input"
                  placeholder="Search Here"
                />
                <button type="submit" className="btn"></button>
                <span className="ti-close">
                  <AiOutlineCloseCircle />
                </span>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default AppHeader
