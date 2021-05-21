import React, { useEffect, useRef, useState } from "react"
import FilterWidget from "../../../common/components/FilterWidget"
import { useDispatch, useSelector, useStore } from "react-redux"
import { Range } from "rc-slider"
import {
  changeLimit,
  getAllProductApi,
  resetFilter,
  searchProduct
} from "../../../redux/_actions/Product/Category/category.Action"
import { getAllFilterApi } from "../../../redux/_actions/Product/Filter/filter.Action"

import { AiOutlineSearch } from "react-icons/ai"
import RenderProduct from "./RenderProduct"
import GetDataProduct from "../hooks/getDataProduct"

const CategoryProduct = () => {
  const dispatch = useDispatch()
  const {
    products,
    page,
    limit,
    search,
    Filters,
    total,
    idCategory
  } = GetDataProduct()

  const [rangeValue, setRangeValue] = useState({ min: 0, max: 100 })

  const handleRange = value => {
    setRangeValue({ min: value[0], max: value[1] })
  }

  useEffect(() => {
    dispatch(getAllFilterApi())
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllProductApi({ page, limit, search, idCategory }))
  }, [dispatch, page, limit, search, idCategory])

  const getAllProduct = () => {
    dispatch(resetFilter())
  }
  const searchRef = useRef(null)
  const handleSearch = () => {
    const strSearch = searchRef.current.value
    dispatch(searchProduct(strSearch))

    searchRef.current.focus()
  }

  const handleChangeLimit = (e, limit) => {
    const current = document.querySelector(
      ".single_product_menu .top_pageniation ul li.active"
    )
    current.className = current.className.replace("active", "")
    e.target.className += " active"
    dispatch(changeLimit(limit))
  }
  return (
    <section className="cat_product_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <div
                className="l_w_name"
                style={{ textAlign: "center" }}
                onClick={getAllProduct}
              >
                <h3>All Product</h3>
              </div>
              <FilterWidget title="Product Filter" widgets={Filters || []} />
              <aside className="left_widgets p_filter_widgets price_rangs_aside">
                <div className="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div className="widgets_inner">
                  <div className="range_item">
                    <Range
                      onChange={handleRange}
                      style={{ marginBottom: "20px" }}
                      value={[rangeValue.min, rangeValue.max]}
                    />
                    <div className="d-flex align-items-center">
                      <div className="price_text">
                        <p style={{ marginBottom: "unset" }}>Price :</p>
                      </div>
                      <div className="price_value d-flex justify-content-center">
                        <span>{rangeValue.min}</span>
                        <span>to</span>
                        <span>{rangeValue.max}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="product_top_bar d-flex justify-content-between align-items-center">
                  <div className="single_product_menu">
                    <p>
                      <span>{total} </span> Product Found
                    </p>
                  </div>
                  <div className="single_product_menu d-flex">
                    <h5>Show :</h5>
                    <div className="top_pageniation">
                      <ul>
                        <li
                          className="active"
                          onClick={e => handleChangeLimit(e, 12)}
                        >
                          12
                        </li>
                        <li onClick={e => handleChangeLimit(e, 24)}>24</li>
                        <li onClick={e => handleChangeLimit(e, 36)}>36</li>
                      </ul>
                    </div>
                  </div>
                  <div className="single_product_menu d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                        ref={searchRef}
                      />
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                          onClick={handleSearch}
                        >
                          <AiOutlineSearch />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RenderProduct products={products || []} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryProduct
