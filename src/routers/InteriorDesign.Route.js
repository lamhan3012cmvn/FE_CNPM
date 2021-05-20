import { lazy } from "react"
import { Switch, Route } from "react-router-dom"
import Auth from "../common/components/Auth"
import { PATH } from "../common/constants/path"

const InteriorDesignPage = lazy(() => import("../pages/InteriorDesignPage"))
const SingleInteriorPage = lazy(() => import("../pages/SingleInteriorPage"))

const InteriorDesignRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.interiorDesign}
        component={Auth(InteriorDesignPage, null)}
      />
      <Route
        exact
        path={`${PATH.interiorDesign}/:interiorID`}
        component={Auth(SingleInteriorPage, null)}
      />
    </Switch>
  )
}

export default InteriorDesignRoute
