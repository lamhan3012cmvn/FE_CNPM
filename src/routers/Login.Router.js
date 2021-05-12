import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"
import Auth from "../common/components/Auth"

const LoginPage = lazy(() => import("../pages/LoginPage"))

const LoginRouter = () => {
  return (
    <Switch>
      <Route path={PATH.login} exact component={Auth(LoginPage, false)} />
    </Switch>
  )
}

export default LoginRouter
