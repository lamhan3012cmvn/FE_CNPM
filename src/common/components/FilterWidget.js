import React from "react"
import { Link } from "react-router-dom"

const FilterWidget = props => {
  const { title, widgets = [] } = props

  const onClickCategory = (i, e) => {
    console.log(`LHA:  ===> file: FilterWidget.js ===> line 10 ===> e`, e)
    console.log(`LHA:  ===> file: FilterWidget.js ===> line 10 ===> i`, i)
  }
  return (
    <aside className="left_widgets p_filter_widgets">
      <div className="l_w_title">
        <h3>{title}</h3>
      </div>
      <div className="widgets_inner">
        <ul className="list">
          {widgets.map((widget, i) => (
            <li key={`${widget.name}_${i}`}>
              <span to="#">
                <div className="l_w_name">
                  <h3>{widget.name}</h3>
                </div>

                <ul className="list" style={{ marginTop: "unset" }}>
                  {widget.Category.map((cate, i) => (
                    <li
                      key={cate._id}
                      onClick={onClickCategory}
                      data-key={cate._id}
                    >
                      <span to="#">{cate.name}</span>
                    </li>
                  ))}
                </ul>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default FilterWidget
