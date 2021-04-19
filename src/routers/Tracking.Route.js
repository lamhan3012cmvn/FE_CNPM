import { Route, Switch } from "react-router"
import { PATH } from "../common/contants/path"
import TrackingPage from "../pages/TrackingPage"

const TrackingRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.tracking} component={() => <TrackingPage />} />
    </Switch>
  )
}

export default TrackingRoute
