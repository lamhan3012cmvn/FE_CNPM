import React from "react"
import ProductItem from "./ProductItem"
import { Link } from "react-router-dom"
const CategoryProduct = () => {
  return (
    <section className="cat_product_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <Link>Frozen Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link>Dried Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link>Fresh Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link>Meat Alternatives</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link>Fresh Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link>Meat Alternatives</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link>Meat</Link>
                      <span>(250)</span>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Product filters</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
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
                  </ul>
                  <ul className="list">
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
                  </ul>
                </div>
              </aside>

              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Color Filter</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <Link>Black</Link>
                    </li>
                    <li>
                      <Link>Black Leather</Link>
                    </li>
                    <li className="active">
                      <Link>Black with red</Link>
                    </li>
                    <li>
                      <Link>Gold</Link>
                    </li>
                    <li>
                      <Link>Spacegrey</Link>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside className="left_widgets p_filter_widgets price_rangs_aside">
                <div className="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div className="widgets_inner">
                  <div className="range_item">
                    {/* <!-- <div id="slider-range"></div> --> */}
                    {/* <input type="text" className="js-range-slider" value="" /> */}
                    <div className="d-flex">
                      <div className="price_text">
                        <p>Price :</p>
                      </div>
                      {/* <div className="price_value d-flex justify-content-center">
                        <input
                          type="text"
                          className="js-input-from"
                          id="amount"
                          readOnly
                        />
                        <span>to</span>
                        <input
                          type="text"
                          className="js-input-to"
                          id="amount"
                          readOnly
                        />
                      </div> */}
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
                  {/* <div className="single_product_menu d-flex">
                    <h5>short by : </h5>
                    <SelectComponent
                      options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" }
                      ]}
                    />
                  </div> */}
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
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductItem />
              </div>

              <div className="col-lg-12">
                <div className="pageination">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link to="" className="page-link" aria-label="Previous">
                          <i className="ti-angle-double-left"></i>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          6
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link" aria-label="Next">
                          <i className="ti-angle-double-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryProduct
