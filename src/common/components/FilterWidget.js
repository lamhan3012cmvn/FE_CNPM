import React from "react"
import { Link } from "react-router-dom"

const FilterWidget = props => {
  const { title, widgets } = props
  return (
    <aside className="left_widgets p_filter_widgets">
      <div className="l_w_title">
        <h3>{title}</h3>
      </div>
      <div className="widgets_inner">
        <ul className="list">
          {widgets.map((e, i) => (
            <li key={`${e.name}_${i}`}>
              <Link to="#">{e.name}</Link>
            </li>
          ))}
        </ul>
        {/* <ul className="list">
          <li>
            <Link>Apple</Link>
          </li>
          <li>
            <Link>Asus</Link>
          </li>
          <li className="active">
            <Link>Gionee</Link>
          </li>
          <li>
            <Link>Micromax</Link>
          </li>
          <li>
            <Link>Samsung</Link>
          </li>
        </ul> */}
      </div>
    </aside>
  )
}

export default FilterWidget
