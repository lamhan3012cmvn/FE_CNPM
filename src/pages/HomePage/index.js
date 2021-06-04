/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import BannerPath from "../../common/components/BannerPath"
import FeaturePart from "./components/FeaturePart"
import ProductList from "./components/ProductList"
import img1 from "../../img/banner_img.png"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsHomeApi } from "../../redux/_actions/Product/Category/category.Action"
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
  const products = useSelector(state => state.product.productHome)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsHomeApi())
  }, [dispatch])
  return (
    <>
      <BannerPath propsBanner={Banner} />
      <FeaturePart />
      {products.map((current, i) => {
        return (
          <ProductList
            products={current.products}
            title={current.roomName}
            key={i}
          />
        )
      })}
      {/* <ProductList products={products} title="Awesome" />
      <ProductList products={products} title="Living Room" />
      <ProductList products={products} title="Bed Room" />
      <ProductList products={products} title="Dining room" />
      <ProductList products={products} title="Decoration and houseware" /> */}
    </>
  )
}

export default HomePage
