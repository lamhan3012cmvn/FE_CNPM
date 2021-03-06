import React, { lazy } from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"

const ConfirmationPage = lazy(() => import("../pages/ConfirmationPage"))

const ConfirmationRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.confirmation} component={ConfirmationPage} />
    </Switch>
  )
}

export default ConfirmationRoute
