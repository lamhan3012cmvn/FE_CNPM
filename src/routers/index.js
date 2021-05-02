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
import TrackingRoute from "./Tracking.Route"
import InteriorDesignRouter from "./InteriorDesign.Router"

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
      <InteriorDesignRouter />
      <AppFooter />
    </Router>
  )
}

export default Routers
