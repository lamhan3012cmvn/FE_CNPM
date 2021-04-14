import React from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/contants/path"
import CategoryPage from "../pages/Category"

const CategoryRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.category} component={() => <CategoryPage />} />
    </Switch>
  )
}

export default CategoryRoute
