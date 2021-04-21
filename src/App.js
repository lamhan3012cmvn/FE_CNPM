import Routers from "./routers"
import "./index.css"
import { css } from "@emotion/core"
import ClipLoader from "react-spinners/ClipLoader"
import { useState } from "react"
import { useSelector } from "react-redux"
import "./App.css"
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  z-index: 2;
`
const App = () => {
  // let [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#ffffff")
  const loading = useSelector(state => state.system.loading)
  return (
    <div className="App">
      {loading && (
        <div className="Loading">
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      )}

      <Routers />
    </div>
  )
}

export default App
