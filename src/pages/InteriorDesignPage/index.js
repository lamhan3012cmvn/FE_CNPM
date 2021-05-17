import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Breadcrumb from "../../common/components/Breadcrumb"
import TitleList from "../../common/components/TitleList"
import CartInterior from "./components/CartInterior"
import SelectProjectType from "./components/SelectProjectType"
import SingleBanner from "./components/SingleBanner"

const InteriorDesignPage = () => {
  const [componentBanner, setComponentBanner] = useState([])
  const ImgBanner = useSelector(state => state.interior.ImgBanner)

  const cartsInterior = useSelector(state => state.interior.Apartment)

  useEffect(() => {
    setComponentBanner(
      ImgBanner.map((e, i) => {
        return {
          component: <SingleBanner key={i} bannerImg={e} />
        }
      })
    )
  }, [ImgBanner])
  const render = () => {
    return cartsInterior ? (
      cartsInterior.map(interior => (
        <div className="col-lg-4 col-sm-6" style={{ paddingTop: "50px" }}>
          <CartInterior interior={interior} />
        </div>
      ))
    ) : (
      <h3>Empty</h3>
    )
  }
  return (
    <>
      {/* <AppSlider
        style={{ marginTop: "83.24px" }}
        propsComponents={componentBanner}
      /> */}
      <Breadcrumb namePage="Interior" preLink={{ name: "Home" }} />
      <section className="interior_list">
        <div className="container">
          <TitleList title="Project">
            <SelectProjectType
              projectType={[
                { id: "1", type: "Chung Cu", active: "active" },
                { id: "2", type: "Biet Thu", active: "" },
                { id: "3", type: "Nha Pho", active: "" }
              ]}
            />
          </TitleList>
          <div className="row align-items-center justify-content-center">
            {render()}
          </div>
        </div>
      </section>
      {/* <ProjectPart CartsInterior={[1, 2, 3, 4, 5]} /> */}
    </>
  )
}

export default InteriorDesignPage
