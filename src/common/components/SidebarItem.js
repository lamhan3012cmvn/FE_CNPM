import React, { useState } from "react"
import { Link } from "react-router-dom"

const SidebarItem = props => {
  const [expanded, setExpanded] = useState(false)
  const { items } = props

  const render = () => {
    return items.list ? (
      <ul className="collapse first-level base-level-line">
        {items.list.map((e, i) => (
          <SidebarItem items={{ title: e }} key={i} />
        ))}
      </ul>
    ) : (
      <li className="sidebar-item">
        <Link
          style={{ textDecoration: "none" }}
          className={`sidebar-link ${
            !items.menus ? "sidebar-link" : "has-arrow"
          }`}
          to={items.link ? items.link : "#"}
          aria-expanded={expanded}
        >
          {items.icon ? items.icon : ""}
          <span className="hide-menu">{items.title}</span>
        </Link>
      </li>
    )
  }

  return render()
}

export default SidebarItem
