import { PATH } from "../common/contants/path"
import { Switch, Route } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
const RegisterRouter = () => {
  return (
    <Switch>
      <Route path={PATH.register} exact component={() => <RegisterPage />} />
    </Switch>
  )
}

export default RegisterRouter
