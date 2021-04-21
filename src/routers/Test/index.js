import React from "react"
import { Route, Switch } from "react-router"

import { useState } from "react"
import { css } from "@emotion/core"
import ClipLoader from "react-spinners/ClipLoader"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Tets = () => {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState("#ffffff")

  const renderCmp = () => {
    return (
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={input => setColor(input.target.value)}
          placeholder="Color of the loader"
        />

        <ClipLoader color={color} loading={loading} css={override} size={150} />
      </div>
    )
  }

  return (
    <Switch>
      <Route path="/Test" exact component={() => renderCmp()} />
    </Switch>
  )
}

export default Tets
