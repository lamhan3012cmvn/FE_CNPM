import React, { useEffect, useState } from "react"
import FilterWidget from "../../../common/components/FilterWidget"
import { useDispatch, useSelector, useStore } from "react-redux"
import { Range } from "rc-slider"
import { getAllProductApi } from "../../../redux/_actions/Product/Category/category.Action"
import { getAllFilterApi } from "../../../redux/_actions/Product/Filter/filter.Action"

import { AiOutlineSearch } from "react-icons/ai"
import RenderProduct from "./RenderProduct"

const CategoryProduct = () => {
  const Filters = useSelector(state => state.filter.rooms)

  const total = useSelector(state => state.product.total)

  const [rangeValue, setRangeValue] = useState({ min: 0, max: 100 })
  const handleRange = value => {
    setRangeValue({ min: value[0], max: value[1] })
  }

  const products = useSelector(state => state.product.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFilterApi())
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllProductApi())
  }, [dispatch])

  const getAllProduct = () => {
    dispatch(getAllProductApi())
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
                      <span>{total} </span> Prodict Found
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
