import { Route, Switch } from "react-router"
import { PATH } from "../common/contants/path"
import CartPage from "../pages/CartPage"

const CartRouter = () => {
  return (
    <Switch>
      <Route exact path={PATH.cartArea} component={() => <CartPage />} />
    </Switch>
  )
}

export default CartRouter
