import React from "react"
import AppFooter from "../../common/components/AppFooter"
import AppHeader from "../../common/components/AppHeader"
import Breadcrumb from "../../common/components/Breadcrumb"
import CategoryProduct from "../../common/components/CategoryProduct"
const CategoryPage = () => {
  return (
    <>
      <AppHeader />
      <Breadcrumb />
      <CategoryProduct />
      <AppFooter />
    </>
  )
}

export default CategoryPage
