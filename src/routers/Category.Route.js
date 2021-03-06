import React, { lazy } from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"
import Auth from "../common/components/Auth"

const lazyLoading = () => {
  return lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => resolve(import("../pages/Category")), 500)
      })
  )
}
const CategoryPage = lazyLoading()

const CategoryRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.category} component={Auth(CategoryPage, null)} />
    </Switch>
  )
}

export default CategoryRoute
