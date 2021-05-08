import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import Breadcrumb from "../../common/components/Breadcrumb"
import SingleProduct from "../../common/components/SingleProduct"
import { getAllProductDetailApi } from "../../redux/_actions/Product/Category/category.Action"

const SingleProductPage = props => {
  const params = useParams()
  console.log(`LHA:  ===> file: index.js ===> line 10 ===> params`, params)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductDetailApi(params.id))
  }, [dispatch, params])
  return (
    <>
      <Breadcrumb namePage="Single Product" preLink={{ name: "Category" }} />
      <SingleProduct />
    </>
  )
}

export default SingleProductPage
