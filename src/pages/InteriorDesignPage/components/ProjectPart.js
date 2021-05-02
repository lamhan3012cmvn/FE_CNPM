import ProductItem from "../../../common/components/ProductItem"
import TitleList from "../../../common/components/TitleList"

const ProjectPart = () => {
  return (
    <section className="product_list section_padding">
      <div className="container">
        <TitleList title="Project" content="Chung Cu" />
        <div className="row">
          <div className="col-lg-12">
            <div className="product_list_slider owl-carousel">
              <div className="single_product_list_slider">
                <div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <ProductItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPart
