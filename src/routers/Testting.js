/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import logo from "../images/logo-icon.png"
import logo_text from "../images/logo-text.png"
import logo_light_text from "../images/logo-light-text.png"
import av from "../images/users/profile-pic.jpg"
import {
  AiOutlineBell,
  AiFillSetting,
  AiOutlineMore,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineSetting
} from "react-icons/ai"
import { TiTicket, TiDocumentText } from "react-icons/ti"
import SidebarItem from "../common/components/SidebarItem"
import MessageItem from "../common/components/MessageItem"
import MessageList from "./MessageList"
const Testting = () => {
  return (
    <div id="main-wrapper">
      <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md">
          <div class="navbar-header">
            <a class="nav-toggler waves-effect waves-light d-block d-md-none">
              <i class="ti-menu ti-close"></i>
            </a>
            <div class="navbar-brand">
              <a href="index.html">
                <b class="logo-icon">
                  <img src={logo} alt="homepage" class="dark-logo" />
                  <img src={logo} alt="homepage" class="light-logo" />
                </b>
                <span class="logo-text">
                  <img src={logo_text} alt="homepage" class="dark-logo" />
                  <img
                    src={logo_light_text}
                    class="light-logo"
                    alt="homepage"
                  />
                </span>
              </a>
            </div>
            <a class="topbartoggler d-block d-md-none waves-effect waves-light">
              <AiOutlineMore />
            </a>
          </div>
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav float-left mr-auto ml-3 pl-1">
              <MessageList />
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                >
                  <AiOutlineSetting />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav float-right">
              <li class="nav-item d-none d-md-block">
                <a class="nav-link">
                  <form>
                    <div class="customize-input">
                      <input
                        class="form-control custom-shadow custom-radius border-0 bg-white"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <i class="form-control-icon"></i>
                    </div>
                  </form>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle">
                  <img src={av} alt="user" class="rounded-circle" width="40" />
                  <span class="ml-2 d-none d-lg-inline-block">
                    <span>Hello,</span> <span class="text-dark">Jason Doe</span>
                    <i class="svg-icon"></i>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                  <a class="dropdown-item">
                    <i class="svg-icon mr-2 ml-1"></i>
                    My Profile
                  </a>
                  <a class="dropdown-item">
                    <i class="svg-icon mr-2 ml-1"></i>
                    My Balance
                  </a>
                  <a class="dropdown-item">
                    <i class="svg-icon mr-2 ml-1"></i>
                    Inbox
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">
                    <i class="svg-icon mr-2 ml-1"></i>
                    Account Setting
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">
                    <i class="svg-icon mr-2 ml-1"></i>
                    Logout
                  </a>
                  <div class="dropdown-divider"></div>
                  <div class="pl-4 p-3">
                    <a class="btn btn-sm btn-info">View Profile</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside class="left-sidebar">
        <div class="scroll-sidebar">
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <SidebarItem
                items={{
                  menus: false,
                  link: "index.html",
                  title: "Dashboard",
                  icon: <AiOutlineHome />
                }}
              />
              <li class="list-divider"></li>

              <li class="nav-small-cap">
                <span class="hide-menu">Applications</span>
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

              <li class="list-divider"></li>
              <li class="nav-small-cap">
                <span class="hide-menu">Extra</span>
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
      <div class="page-wrapper">
        <div class="page-breadcrumb">
          <div class="row">
            <div class="col-7 align-self-center">
              <h3 class="page-title text-truncate text-dark font-weight-medium mb-1">
                Good Morning Jason!
              </h3>
              <div class="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb m-0 p-0">
                    <li class="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">Lay out</div>
      </div>
    </div>
  )
}

export default Testting
