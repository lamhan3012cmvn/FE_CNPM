import { lazy } from "react"
import { Route, Switch } from "react-router"
import Auth from "../common/components/Auth"
import { PATH } from "../common/constants/path"

const CartPage = lazy(() => import("../pages/CartPage"))
const CartRouter = () => {
  return (
    <Switch>
      <Route exact path={PATH.cartArea} component={Auth(CartPage, true)} />
    </Switch>
  )
}

export default CartRouter
