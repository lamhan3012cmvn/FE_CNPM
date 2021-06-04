import React, { lazy } from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"

const lazyLoading = () => {
  return lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => resolve(import("../pages/CheckoutPage")), 500)
      })
  )
}
const CheckoutPage = lazyLoading()

const CheckoutRoute = () => {
  return (
    <Switch>
      {/* <Route exact path={PATH.category} component={Auth(CheckoutPage, null)} /> */}
      <Route exact path={PATH.checkoutBill} component={CheckoutPage} />
    </Switch>
  )
}

export default CheckoutRoute
