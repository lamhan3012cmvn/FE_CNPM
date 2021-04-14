import { Switch, Route } from "react-router-dom"
import { PATH } from "../common/contants/path"
import HomePage from "../pages/HomePage"
const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path={PATH.home} component={() => <HomePage />} />
    </Switch>
  )
}

export default HomeRouter
