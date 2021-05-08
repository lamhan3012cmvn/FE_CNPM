/* eslint-disable no-unused-vars */
import { useState } from "react"
import BannerPath from "../../common/components/BannerPath"
import FeaturePart from "./components/FeaturePart"
import ProductList from "./components/ProductList"
import SingleBanner from "./components/SingleBanner"
import img1 from "../../img/banner_img.png"
const HomePage = () => {
  const [Banner, setBanner] = useState([
    {
      img: img1
    },
    {
      img: img1
    },
    {
      img: img1
    },
    {
      img: img1
    }
  ])
  return (
    <>
      <BannerPath propsBanner={Banner} />
      <FeaturePart />
      <ProductList />
    </>
  )
}

export default HomePage
