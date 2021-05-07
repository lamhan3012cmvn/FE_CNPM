/* eslint-disable no-console */
import logo from "../../img/logo.png"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"

import SearchHeader from "./SearchHeader"
import MenuIconHeader from "./MenuIconHeader"
import MenuTextHeader from "./MenuTextHeader"
import { useSelector } from "react-redux"

const AppHeader = () => {
  const [modalSearch, setModalSearch] = useState(false)

  const changeSearch = () => {
    setModalSearch(!modalSearch)
  }

  const [toogle, setToogle] = useState(false)
  const closeToogle = () => {
    setToogle(false)
  }

  const currentUser = useSelector(state => state.user)

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
                <button
                  className="navbar-toggler"
                  onClick={() => setToogle(!toogle)}
                >
                  <span className="menu_icon">
                    <FaBars />
                  </span>
                </button>
                <MenuTextHeader FaBars={{ toogle, closeToogle }} />
                <MenuIconHeader
                  onChange={changeSearch}
                  isLogin={currentUser.isLogin}
                  user={currentUser.user}
                />
              </nav>
            </div>
          </div>
        </div>
        <SearchHeader search={modalSearch} onChange={changeSearch} />
      </header>
    </>
  )
}

export default AppHeader
