import Routers from "./routers"
import "./index.css"
import "./App.css"
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
    <div className="App">
      <Routers />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
