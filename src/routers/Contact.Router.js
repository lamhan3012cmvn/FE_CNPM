import React, { lazy } from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"

const ContactPage = lazy(() => import("../pages/ContactPage"))
const ContactRouter = () => {
  return (
    <Switch>
      <Route exact path={PATH.contact} component={ContactPage} />
    </Switch>
  )
}

export default ContactRouter
