import React, { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import FilterWidget from "./FilterWidget"
import { useDispatch, useSelector } from "react-redux"

import { Range } from "rc-slider"

import { getAllProductApi } from "../../redux/_actions/Product/Category/category.Action"
import {
  getAllCategoryApi,
  getAllRoomApi
} from "../../redux/_actions/Product/Filter/filter.Action"
import Pageination from "./Pageination"

const CategoryProduct = () => {
  const FilterCategory = useSelector(state => state.filter.category)
  const FilterColor = useSelector(state => state.filter.room)

  const [rangeValue, setRangeValue] = useState({ min: 0, max: 100 })
  const handleRange = value => {
    setRangeValue({ min: value[0], max: value[1] })
  }

  const products = useSelector(state => state.product.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategoryApi())
    dispatch(getAllRoomApi())
  }, [])
  useEffect(() => {
    dispatch(getAllProductApi())
  }, [])

  return (
    <section className="cat_product_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <FilterWidget title="Product Filter" widgets={FilterCategory} />
              <FilterWidget title="Color Filter" widgets={FilterColor} />
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
                      <span>10000 </span> Prodict Found
                    </p>
                  </div>
                  <div className="single_product_menu d-flex">
                    <h5>show :</h5>
                    <div className="top_pageniation">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                  </div>
                  <div className="single_product_menu d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                      />
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <i className="ti-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center latest_product_inner">
              {products &&
                products.map((e, i) => (
                  <div className="col-lg-4 col-sm-6" key={i}>
                    <ProductItem product={e} />
                  </div>
                ))}

              <div className="col-lg-12">
                <Pageination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryProduct
