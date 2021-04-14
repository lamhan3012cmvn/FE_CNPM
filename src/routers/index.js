import { BrowserRouter as Router } from "react-router-dom"
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
      <RegisterRouter/>
      <SingleProductRouter/>
      <Tets />
    </Router>
  )
}

export default Routers
