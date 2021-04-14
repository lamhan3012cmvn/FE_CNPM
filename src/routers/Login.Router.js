import { PATH } from "../common/contants/path"
import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
const LoginRouter = () => {
  return (
    <Switch>
      <Route path={PATH.login} exact component={() => <LoginPage />} />
    </Switch>
  )
}

export default LoginRouter
