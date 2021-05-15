import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"

const SingleProductPage = lazy(() => import("../pages/SingleProductPage"))
const SingleProductRoute = () => {
  return (
    <Switch>
      <Route
        path={`${PATH.singleProduct}/:id`}
        exact
        component={SingleProductPage}
      />
    </Switch>
  )
}

export default SingleProductRoute
