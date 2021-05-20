import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"
import Auth from "../common/components/Auth"

const SingleProductPage = lazy(() => import("../pages/SingleProductPage"))
const SingleProductRoute = () => {
  return (
    <Switch>
      <Route
        path={`${PATH.singleProduct}/:id`}
        exact
        component={Auth(SingleProductPage, null)}
      />
    </Switch>
  )
}

export default SingleProductRoute
