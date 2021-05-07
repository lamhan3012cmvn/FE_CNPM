/* eslint-disable no-unused-vars */
import { useState } from "react"
import BannerPath from "../../common/components/BannerPath"
import FeaturePart from "./components/FeaturePart"
import ProductList from "./components/ProductList"
import SingleBanner from "./components/SingleBanner"
import img1 from "../../img/banner_img.png"
const HomePage = () => {
  const [componentBanner, setComponentBanner] = useState([
    {
      component: <SingleBanner bannerImg={img1} />
    },
    {
      component: <SingleBanner bannerImg={img1} />
    },
    {
      component: <SingleBanner bannerImg={img1} />
    },
    {
      component: <SingleBanner bannerImg={img1} />
    }
  ])
  return (
    <>
      <BannerPath propsComponents={componentBanner} />
      <FeaturePart />
      <ProductList />
    </>
  )
}

export default HomePage
