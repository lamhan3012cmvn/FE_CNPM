import { lazy } from "react"
import { Switch, Route } from "react-router-dom"
import Auth from "../common/components/Auth"
import { PATH } from "../common/constants/path"

const HomePage = lazy(() => import("../pages/HomePage"))
const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.home} component={Auth(HomePage, null)} />
    </Switch>
  )
}

export default HomeRoute
