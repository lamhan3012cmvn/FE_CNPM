import { lazy } from "react"
import { Route, Switch } from "react-router"
import Auth from "../common/components/Auth"
import { PATH } from "../common/constants/path"

const ManagerBillPage = lazy(() => import("../pages/ManagerBillPage"))
const ManagerBillRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.managerBill}
        component={Auth(ManagerBillPage, true)}
      />
    </Switch>
  )
}

export default ManagerBillRoute
