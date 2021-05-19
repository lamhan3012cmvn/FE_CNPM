import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import Breadcrumb from "../../common/components/Breadcrumb"
import SingleProduct from "./components/SingleProduct"
import { getProductDetailApi } from "../../redux/_actions/Product/Category/category.Action"

const SingleProductPage = props => {
  const params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDetailApi(params.id))
  }, [dispatch, params])
  return (
    <>
      <Breadcrumb namePage="Single Product" preLink={{ name: "Category" }} />
      <SingleProduct />
    </>
  )
}

export default SingleProductPage
