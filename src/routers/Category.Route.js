import React from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"
import CategoryPage from "../pages/Category"
import Auth from "../common/components/Auth"
const CategoryRoute = () => {
  return (
    // component={Auth(CategoryPage, false)}
    <Switch>
      <Route exact path={PATH.category} component={() => <CategoryPage />} />
    </Switch>
  )
}

export default CategoryRoute
