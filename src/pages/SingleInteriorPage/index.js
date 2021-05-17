import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import AppSlider from "../../common/components/AppSlider"
import Breadcrumb from "../../common/components/Breadcrumb"
import TitleList from "../../common/components/TitleList"

const SingleInteriorPage = () => {
  const interior = useSelector(state => state.interior.singleApartment)
  const cartsInterior = useSelector(state => state.interior.Apartment)
  const render = () => {
    return cartsInterior.map(interior => (
      <div className="plr-15">
        <Link to={`/interiorDesign/${interior._id}`}>
          <div className="single_product_item">
            <img
              src={interior.Images[0].img}
              alt=""
              style={{ height: "65%" }}
            />
            <div className="single_product_text interior_lineText">
              <h4>{interior.title}</h4>
            </div>
          </div>
        </Link>
      </div>
    ))
  }
  return (
    <>
      <Breadcrumb
        namePage="Single Interior Design"
        preLink={{ name: "Project Page" }}
      />
      <section className="interior_list">
        <div className="container">
          <TitleList title="Project"></TitleList>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 col-md-12">
              <h3>
                Name: <span>{interior.title}</span>
              </h3>
            </div>
            <div className="col-lg-10 col-md-12">
              <ul className="interior_info">
                <li>
                  <p>
                    Project: <span>{interior.info.project}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Style: <span>{interior.info.style}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Acreage: <span>{interior.info.S}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-10 col-md-12 interior_description">
              <p>
                Description: <span>{interior.description}</span>
              </p>
            </div>
            {interior.Images.map(Imgs => (
              <div className="col-lg-10 col-md-12">
                <img src={Imgs.img} alt="" />
                <p>{Imgs.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="interior_list">
        <div className="container">
          <TitleList title="Maybe You Are Interested ..."></TitleList>
          <AppSlider show={3}>{render()}</AppSlider>
        </div>
      </section>
    </>
  )
}

export default SingleInteriorPage
