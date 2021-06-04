import { FaPlay } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { PATH } from "../../../common/constants/path"

const FeaturePart = () => {
  const inter = useSelector(state => state.product.interHome)
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
            {inter.map((int, i) => {
              const nameClass =
                i % 3 === 0 ? "col-lg-7 col-sm-6" : "col-lg-5 col-sm-6"
              return (
                <div className={nameClass} key={i}>
                  <div className="single_feature_post_text">
                    <p>{int.TypeInteriorDesign.name}</p>
                    <h3 style={{ width: "80%" }}>{int.title}</h3>
                    <Link
                      to={`${PATH.interiorDesign}/${int._id}`}
                      className="feature_btn"
                    >
                      EXPLORE NOW <FaPlay />
                    </Link>
                    <div className="imgBx_Feature"></div>
                    <img src={int.Images[0].img} alt="" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturePart
