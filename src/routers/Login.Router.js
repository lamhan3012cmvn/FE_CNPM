import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"

const LoginPage = lazy(() => import("../pages/LoginPage"))

const LoginRouter = () => {
  return (
    <Switch>
      <Route path={PATH.login} exact component={LoginPage} />
    </Switch>
  )
}

export default LoginRouter
