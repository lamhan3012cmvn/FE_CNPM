import React from "react"
import Breadcrumb from "../../common/components/Breadcrumb"
import CategoryProduct from "../../common/components/CategoryProduct"
const CategoryPage = props => {
  return (
    <>
      <Breadcrumb namePage="Category" preLink={{ name: "Home" }} />
      <CategoryProduct />
    </>
  )
}

export default CategoryPage
