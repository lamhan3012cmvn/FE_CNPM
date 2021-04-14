import { FaPlay } from "react-icons/fa"
import feature1 from "../../img/feature/feature_1.png"
import feature2 from "../../img/feature/feature_2.png"
import feature3 from "../../img/feature/feature_3.png"
import feature4 from "../../img/feature/feature_4.png"
const FeaturePart = () => {
  return (
    <>
      <section className="feature_part padding_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section_tittle text-center">
                <h2>Featured Category</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 col-sm-6">
              <div className="single_feature_post_text">
                <p>Premium Quality</p>
                <h3>Latest foam Sofa</h3>
                <a href="#" className="feature_btn">
                  EXPLORE NOW <FaPlay />
                </a>
                <img src={feature1} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_feature_post_text">
                <p>Premium Quality</p>
                <h3>Latest foam Sofa</h3>
                <a href="#" className="feature_btn">
                  EXPLORE NOW <FaPlay />
                </a>
                <img src={feature2} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_feature_post_text">
                <p>Premium Quality</p>
                <h3>Latest foam Sofa</h3>
                <a href="#" className="feature_btn">
                  EXPLORE NOW <FaPlay />
                </a>
                <img src={feature3} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-sm-6">
              <div className="single_feature_post_text">
                <p>Premium Quality</p>
                <h3>Latest foam Sofa</h3>
                <a href="#" className="feature_btn">
                  EXPLORE NOW <FaPlay />
                </a>
                <img src={feature4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturePart
