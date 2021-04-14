import React from "react"
import ProductItem from "./ProductItem"
import SelectComponent from "./SelectComponent"

const CategoryProduct = () => {
  return (
    <section class="cat_product_area section_padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="left_sidebar_area">
              <aside class="left_widgets p_filter_widgets">
                <div class="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div class="widgets_inner">
                  <ul class="list">
                    <li>
                      <a href="#">Frozen Fish</a>
                      <span>(250)</span>
                    </li>
                    <li>
                      <a href="#">Dried Fish</a>
                      <span>(250)</span>
                    </li>
                    <li>
                      <a href="#">Fresh Fish</a>
                      <span>(250)</span>
                    </li>
                    <li>
                      <a href="#">Meat Alternatives</a>
                      <span>(250)</span>
                    </li>
                    <li>
                      <a href="#">Fresh Fish</a>
                      <span>(250)</span>
                    </li>
                    <li>
                      <a href="#">Meat Alternatives</a>
                      <span>(250)</span>
                    </li>
                    <li>
                      <a href="#">Meat</a>
                      <span>(250)</span>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside class="left_widgets p_filter_widgets">
                <div class="l_w_title">
                  <h3>Product filters</h3>
                </div>
                <div class="widgets_inner">
                  <ul class="list">
                    <li>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <a href="#">Asus</a>
                    </li>
                    <li class="active">
                      <a href="#">Gionee</a>
                    </li>
                    <li>
                      <a href="#">Micromax</a>
                    </li>
                    <li>
                      <a href="#">Samsung</a>
                    </li>
                  </ul>
                  <ul class="list">
                    <li>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <a href="#">Asus</a>
                    </li>
                    <li class="active">
                      <a href="#">Gionee</a>
                    </li>
                    <li>
                      <a href="#">Micromax</a>
                    </li>
                    <li>
                      <a href="#">Samsung</a>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside class="left_widgets p_filter_widgets">
                <div class="l_w_title">
                  <h3>Color Filter</h3>
                </div>
                <div class="widgets_inner">
                  <ul class="list">
                    <li>
                      <a href="#">Black</a>
                    </li>
                    <li>
                      <a href="#">Black Leather</a>
                    </li>
                    <li class="active">
                      <a href="#">Black with red</a>
                    </li>
                    <li>
                      <a href="#">Gold</a>
                    </li>
                    <li>
                      <a href="#">Spacegrey</a>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside class="left_widgets p_filter_widgets price_rangs_aside">
                <div class="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div class="widgets_inner">
                  <div class="range_item">
                    {/* <!-- <div id="slider-range"></div> --> */}
                    <input type="text" class="js-range-slider" value="" />
                    <div class="d-flex">
                      <div class="price_text">
                        <p>Price :</p>
                      </div>
                      <div class="price_value d-flex justify-content-center">
                        <input
                          type="text"
                          class="js-input-from"
                          id="amount"
                          readonly
                        />
                        <span>to</span>
                        <input
                          type="text"
                          class="js-input-to"
                          id="amount"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-12">
                <div class="product_top_bar d-flex justify-content-between align-items-center">
                  <div class="single_product_menu">
                    <p>
                      <span>10000 </span> Prodict Found
                    </p>
                  </div>
                  {/* <div class="single_product_menu d-flex">
                    <h5>short by : </h5>
                    <SelectComponent
                      options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" }
                      ]}
                    />
                  </div> */}
                  <div class="single_product_menu d-flex">
                    <h5>show :</h5>
                    <div class="top_pageniation">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                  </div>
                  <div class="single_product_menu d-flex">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="search"
                      />
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">
                          <i class="ti-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row align-items-center latest_product_inner">
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>
              <div class="col-lg-4 col-sm-6">
                <ProductItem />
              </div>

              <div class="col-lg-12">
                <div class="pageination">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <i class="ti-angle-double-left"></i>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          6
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <i class="ti-angle-double-right"></i>
                        </a>
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
