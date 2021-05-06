import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineCalendar } from "react-icons/ai"
const MessageItem = () => {
  return (
    <Link
      to="#"
      className="message-item d-flex align-items-center border-bottom px-3 py-2"
    >
      <span className="btn btn-success text-white rounded-circle btn-circle">
        <AiOutlineCalendar className="text-white" />
      </span>
      <div className="w-75 d-inline-block v-middle pl-2">
        <h6 className="message-title mb-0 mt-1">Event today</h6>
        <span className="font-12 text-nowrap d-block text-muted text-truncate">
          Just a reminder that you have event
        </span>
        <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
      </div>
    </Link>
  )
}

export default MessageItem
