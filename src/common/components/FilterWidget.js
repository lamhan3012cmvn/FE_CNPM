import React from "react"
import { useDispatch } from "react-redux"
import { getAllProductByCategoryApi } from "../../redux/_actions/Product/Category/category.Action"

const FilterWidget = props => {
  const { title, widgets = [] } = props

  const dispatch = useDispatch()
  const onClickCategory = idCategory => {
    dispatch(getAllProductByCategoryApi(idCategory))
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
              <span style={{ width: "100%" }}>
                <div className="l_w_name">
                  <h3>{widget.name}</h3>
                </div>

                <ul className="list" style={{ marginTop: "unset" }}>
                  {widget.Category.map(cate => (
                    <li
                      key={cate._id}
                      onClick={() => onClickCategory(cate._id)}
                    >
                      <span>{cate.name}</span>
                      <span style={{ color: "#ff3368" }}>{cate.total}</span>
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
