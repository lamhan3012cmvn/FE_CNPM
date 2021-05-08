import React from "react"
import Pageination from "../../../common/components/Pageination"
import ProductItem from "../../../common/components/ProductItem"

const RenderProduct = props => {
  const { products = [] } = props

  const render = () => {
    return (
      <>
        {products.length === 0 ? (
          <div>Empty</div>
        ) : (
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
        )}
      </>
    )
  }
  return render()
}

export default RenderProduct
