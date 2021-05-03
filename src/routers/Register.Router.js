import { PATH } from "../common/constants/path"
import { Switch, Route } from "react-router-dom"
import { lazy } from "react"

const RegisterPage = lazy(() => import("../pages/RegisterPage"))

const RegisterRouter = () => {
  return (
    <Switch>
      <Route path={PATH.register} exact component={RegisterPage} />
    </Switch>
  )
}

export default RegisterRouter
