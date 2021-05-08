import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"

const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const VerifyPage = lazy(() => import("../pages/VerifyPage"))
const RegisterRouter = () => {
  return (
    <Switch>
      <Route path={PATH.register} exact component={RegisterPage} />
      <Route path={`${PATH.register}/verify`} exact component={VerifyPage} />
    </Switch>
  )
}

export default RegisterRouter
