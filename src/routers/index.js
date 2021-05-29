import { BrowserRouter as Router } from "react-router-dom"

import AppHeader from "../common/components/AppHeader"
import AppFooter from "../common/components/AppFooter"
import CartRoute from "./Cart.Router"
import CategoryRoute from "./Category.Route"
import ConfirmationRoute from "./Confirmation.Route"
import HomeRoute from "./Home.Route"
import LoginRoute from "./Login.Route"
import RegisterRoute from "./Register.Route"
import SingleProductRoute from "./SingleProduct.Route"
import TrackingRoute from "./Tracking.Route"
import InteriorDesignRoute from "./InteriorDesign.Route"
import ContactRoute from "./Contact.Route"

import { Suspense } from "react"
import Loading from "../common/components/Loading"
import UserProfile from "./UserProfile.Route"
import ManagerBillRoute from "./ManagerBill.Route"
import CheckoutRoute from "./Checkout.Router"

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <HomeRoute />
        <LoginRoute />
        <CartRoute />
        <CategoryRoute />
        <RegisterRoute />
        <SingleProductRoute />
        <ConfirmationRoute />
        <TrackingRoute />
        <InteriorDesignRoute />
        <ContactRoute />
        <UserProfile />
        <ManagerBillRoute />
        <CheckoutRoute />
        <AppFooter />
      </Suspense>
      <Loading />
    </Router>
  )
}

export default Routers
