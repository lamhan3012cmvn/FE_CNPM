import { lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { PATH } from "../common/constants/path"

const InteriorDesignPage = lazy(() => import("../pages/InteriorDesignPage"))
const SingleInteriorPage = lazy(() => import("../pages/SingleInteriorPage"))

const InteriorDesignRouter = () => {
  return (
    <Switch>
      <Route exact path={PATH.interiorDesign} component={InteriorDesignPage} />
      <Route
        exact
        path={`${PATH.interiorDesign}/:interiorID`}
        component={SingleInteriorPage}
      />
    </Switch>
  )
}

export default InteriorDesignRouter
