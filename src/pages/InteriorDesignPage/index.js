import { useState } from "react"
import AppSlider from "../../common/components/AppSlider"
import BannerPath from "../../common/components/BannerPath"
import Breadcrumb from "../../common/components/Breadcrumb"
import ProjectPart from "./components/ProjectPart"
import SelectProjectType from "./components/SelectProjectType"
import SingleBanner from "./components/SingleBanner"
const InteriorDesignPage = () => {
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FBannerInteriorDesign%2Fslide-thiet-ke-noi-that-2.jpg?alt=media&token=064831d6-b63c-4ac0-8a8e-585be58485ee"
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FBannerInteriorDesign%2Fslide-thiet-ke-noi-that-3.jpg?alt=media&token=0fb53c95-ac9f-4306-b8e3-5a11d499131f"
  const [componentBanner, setComponentBanner] = useState([
    {
      component: <SingleBanner key={1} bannerImg={img1} />
    },
    {
      component: <SingleBanner key={2} bannerImg={img2} />
    }
  ])

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
