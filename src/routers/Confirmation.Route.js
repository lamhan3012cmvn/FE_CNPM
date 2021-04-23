import React from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"
import ConfirmationPage from "../pages/ConfirmationPage"

const ConfirmationRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.confirmation}
        component={() => <ConfirmationPage />}
      />
    </Switch>
  )
}

export default ConfirmationRoute
