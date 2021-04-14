import React from "react"
import AppHeader from "../../common/components/AppHeader"
import BannerPath from "../../common/components/BannerPath"
import FeaturePart from "../../common/components/FeaturePart"
import ProductList from "../../common/components/ProductList"

const HomePage = () => {
  return (
    <>
      <AppHeader />
      <BannerPath />
      <FeaturePart />
      <ProductList />
    </>
  )
}

export default HomePage
