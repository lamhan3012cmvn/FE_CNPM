import { lazy } from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"

const CartPage = lazy(() => import("../pages/CartPage"))
const CartRouter = () => {
  return (
    <Switch>
      <Route exact path={PATH.cartArea} component={CartPage} />
    </Switch>
  )
}

export default CartRouter
