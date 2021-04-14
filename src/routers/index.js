import { BrowserRouter as Router } from "react-router-dom"
import CartRouter from "./Cart.Router"
import CategoryRoute from "./Category.Route"
import HomeRouter from "./Home.Router"
import LoginRouter from "./Login.Router"
import RegisterRouter from "./Register.Router"
import SingleProductRouter from "./SingleProduct.Router"
import Tets from "./Test"
const Routers = () => {
  return (
    <Router>
      <HomeRouter />
      <LoginRouter />
      <CartRouter />
      <CategoryRoute />
      <RegisterRouter />
      <SingleProductRouter />
      <Tets />
    </Router>
  )
}

export default Routers
