import React from "react"
import { AiOutlineBell } from "react-icons/ai"
import { Link } from "react-router-dom"
import MessageItem from "../components/MessageItem"
const MessageList = () => {
  return (
    <li className="nav-item dropdown" style={{ marginLeft: "260px" }}>
      <Link
        to="#"
        className="nav-link dropdown-toggle pl-md-3 position-relative"
      >
        <span>
          <AiOutlineBell />
        </span>
        <span className="badge badge-primary notify-no rounded-circle">5</span>
      </Link>
      <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown show">
        <ul className="list-style-none">
          <li>
            <div className="message-center notifications position-relative">
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
            </div>
          </li>
          <li>
            <Link to="#" className="nav-link pt-3 text-center text-dark">
              <strong>Check all notifications</strong>
              <i className="fa fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default MessageList
