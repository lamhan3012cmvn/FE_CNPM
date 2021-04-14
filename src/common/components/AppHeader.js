import logo from "../../img/logo.png"
import { FaBars, FaCartPlus } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai"
import { useState } from "react"
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
                <a className="navbar-brand">
                  <img src={logo} alt="logo" />
                </a>
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
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog.html"
                        id="navbarDropdown_1"
                      >
                        Shop
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="category.html">
                          shop category
                        </a>
                        <a className="dropdown-item" href="single-product.html">
                          product details
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog.html"
                        id="navbarDropdown_3"
                      >
                        pages
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="login.html">
                          login
                        </a>
                        <a className="dropdown-item" href="tracking.html">
                          tracking
                        </a>
                        <a className="dropdown-item" href="checkout.html">
                          product checkout
                        </a>
                        <a className="dropdown-item" href="cart.html">
                          shopping cart
                        </a>
                        <a className="dropdown-item" href="confirmation.html">
                          confirmation
                        </a>
                        <a className="dropdown-item" href="elements.html">
                          elements
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog.html"
                        id="navbarDropdown_2"
                      >
                        blog
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog.html">
                          blog
                        </a>
                        <a className="dropdown-item" href="single-blog.html">
                          Single blog
                        </a>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="hearer_icon d-flex">
                  <a onClick={changeSearch}>
                    <FiSearch />
                  </a>
                  <a href="#">
                    <AiOutlineHeart />
                  </a>
                  <div className="dropdown cart">
                    <a className="dropdown-toggle">
                      <FaCartPlus />
                    </a>
                    <div className="single_product"></div>
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
