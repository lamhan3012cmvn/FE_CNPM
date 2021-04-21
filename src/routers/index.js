import { BrowserRouter as Router } from "react-router-dom"
import AppHeader from "../common/components/AppHeader"
import AppFooter from "../common/components/AppFooter"
import CartRouter from "./Cart.Router"
import CategoryRoute from "./Category.Route"
import ConfirmationRoute from "./Confirmation.Route"
import HomeRouter from "./Home.Router"
import LoginRouter from "./Login.Router"
import RegisterRouter from "./Register.Router"
import SingleProductRouter from "./SingleProduct.Router"
import Tets from "./Test"
import TrackingRoute from "./Tracking.Route"

const Routers = () => {
  return (
    <Router>
      <AppHeader />
      <HomeRouter />
      <LoginRouter />
      <CartRouter />
      <CategoryRoute />
      <RegisterRouter />
      <SingleProductRouter />
      <ConfirmationRoute />
      <TrackingRoute />
      <Tets />
      <AppFooter />
    </Router>
  )
}

export default Routers
