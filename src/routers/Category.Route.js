import React from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/contants/path"
import CategoryPage from "../pages/Category"
import Auth from "../common/components/Auth"
const CategoryRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.category}
        component={() => Auth(<CategoryPage />, false)}
      />
    </Switch>
  )
}

export default CategoryRoute
