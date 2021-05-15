import { lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { PATH } from "../common/constants/path"

const HomePage = lazy(() => import("../pages/HomePage"))
const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.home} component={HomePage} />
    </Switch>
  )
}

export default HomeRoute
