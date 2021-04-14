import AppFooter from "../../common/components/AppFooter"
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
      <AppFooter />
    </>
  )
}

export default HomePage
