import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AppSlider from "../../common/components/AppSlider"
import ProjectPart from "./components/ProjectPart"
import SelectProjectType from "./components/SelectProjectType"
import SingleBanner from "./components/SingleBanner"
const InteriorDesignPage = () => {
  const [componentBanner, setComponentBanner] = useState([])
  const ImgBanner = useSelector(state => state.interior.ImgBanner)

  const [cartsInterior, setCartsInterior] = useState([])

  useEffect(() => {
    setComponentBanner(
      ImgBanner.map((e, i) => {
        return {
          component: <SingleBanner key={i} bannerImg={e} />
        }
      })
    )
  }, [ImgBanner])

  return (
    <>
      <AppSlider
        style={{ marginTop: "83.24px" }}
        propsComponents={componentBanner}
      />

      <ProjectPart
        content={
          <SelectProjectType
            projectType={[
              { id: "1", type: "Chung Cu" },
              { id: "2", type: "Biet Thu" },
              { id: "3", type: "Nha Pho" }
            ]}
          />
        }
        CartsInterior={[1, 2, 3]}
      />
    </>
  )
}

export default InteriorDesignPage
