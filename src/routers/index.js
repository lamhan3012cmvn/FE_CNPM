import { BrowserRouter as Router } from "react-router-dom"
import HomeRouter from "./Home.Router"
import LoginRouter from "./Login.Router"
import Tets from "./Test"
const Routers = () => {
  return (
    <Router>
      <HomeRouter />
      <LoginRouter />
      <Tets />
    </Router>
  )
}

export default Routers
