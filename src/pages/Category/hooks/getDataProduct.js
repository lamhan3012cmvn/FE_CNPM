import React from "react"
import { useSelector } from "react-redux"

const GetDataProduct = () => {
  const products = useSelector(state => state.product.products)

  const page = useSelector(state => state.product.page)

  const limit = useSelector(state => state.product.limit)

  const search = useSelector(state => state.product.strSearch)

  const Filters = useSelector(state => state.filter.rooms)

  const total = useSelector(state => state.product.total)

  const idCategory = useSelector(state => state.product.idCategory)
  return {
    products,
    page,
    limit,
    search,
    Filters,
    total,
    idCategory
  }
}

export default GetDataProduct
