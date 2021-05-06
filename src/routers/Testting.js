/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import logo from "../images/logo-icon.png"
import logo_text from "../images/logo-text.png"
import logo_light_text from "../images/logo-light-text.png"
import av from "../images/users/profile-pic.jpg"
import {
  AiOutlineMore,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineSetting
} from "react-icons/ai"
import { TiTicket } from "react-icons/ti"
import SidebarItem from "../common/components/SidebarItem"
import MessageList from "./MessageList"
const Testting = () => {
  return (
    <div id="main-wrapper">
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md">
          <div className="navbar-header">
            <a className="nav-toggler waves-effect waves-light d-block d-md-none">
              <i className="ti-menu ti-close"></i>
            </a>
            <div className="navbar-brand">
              <a href="index.html">
                <b className="logo-icon">
                  <img src={logo} alt="homepage" className="dark-logo" />
                  <img src={logo} alt="homepage" className="light-logo" />
                </b>
                <span className="logo-text">
                  <img src={logo_text} alt="homepage" className="dark-logo" />
                  <img
                    src={logo_light_text}
                    className="light-logo"
                    alt="homepage"
                  />
                </span>
              </a>
            </div>
            <a className="topbartoggler d-block d-md-none waves-effect waves-light">
              <AiOutlineMore />
            </a>
          </div>
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
              <MessageList />
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                >
                  <AiOutlineSetting />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav float-right">
              <li className="nav-item d-none d-md-block">
                <a className="nav-link">
                  <form>
                    <div className="customize-input">
                      <input
                        className="form-control custom-shadow custom-radius border-0 bg-white"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <i className="form-control-icon"></i>
                    </div>
                  </form>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle">
                  <img
                    src={av}
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                  <span className="ml-2 d-none d-lg-inline-block">
                    <span>Hello,</span>{" "}
                    <span className="text-dark">Jason Doe</span>
                    <i className="svg-icon"></i>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                  <a className="dropdown-item">
                    <i className="svg-icon mr-2 ml-1"></i>
                    My Profile
                  </a>
                  <a className="dropdown-item">
                    <i className="svg-icon mr-2 ml-1"></i>
                    My Balance
                  </a>
                  <a className="dropdown-item">
                    <i className="svg-icon mr-2 ml-1"></i>
                    Inbox
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">
                    <i className="svg-icon mr-2 ml-1"></i>
                    Account Setting
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">
                    <i className="svg-icon mr-2 ml-1"></i>
                    Logout
                  </a>
                  <div className="dropdown-divider"></div>
                  <div className="pl-4 p-3">
                    <a className="btn btn-sm btn-info">View Profile</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside className="left-sidebar">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Dashboard",
                  icon: <AiOutlineHome />
                }}
              />
              <li className="list-divider"></li>

              <li className="nav-small-cap">
                <span className="hide-menu">Applications</span>
              </li>
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Ticket List",
                  icon: <TiTicket />
                }}
              />

              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Ticket List",
                  icon: <TiTicket />
                }}
              />
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Ticket List",
                  icon: <TiTicket />
                }}
              />
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Ticket List",
                  icon: <TiTicket />
                }}
              />

              <li className="list-divider"></li>
              <li className="nav-small-cap">
                <span className="hide-menu">Extra</span>
              </li>
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Documentation",
                  icon: <TiTicket />
                }}
              />
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Logout",
                  icon: <AiOutlineLogin />
                }}
              />
            </ul>
          </nav>
        </div>
      </aside>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                Good Morning Jason!
              </h3>
              <div className="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">Lay out</div>
      </div>
    </div>
  )
}

export default Testting
