import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"
import Auth from "../common/components/Auth"

const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const VerifyPage = lazy(() => import("../pages/VerifyPage"))
const RegisterRoute = () => {
  return (
    <Switch>
      <Route path={PATH.register} exact component={Auth(RegisterPage, false)} />
      <Route
        path={`${PATH.register}/verify`}
        exact
        component={Auth(VerifyPage, true)}
      />
    </Switch>
  )
}

export default RegisterRoute
