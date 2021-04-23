import Routers from "./routers"
import "./index.css"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
    <div className="App">
      <Routers />
      <ToastContainer />
    </div>
  )
}

export default App
