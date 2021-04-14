import React from "react"
import { Route, Switch } from "react-router"

const Tets = () => {
  return (
    <Switch>
      <Route path="/Test" exact component={() => <input />} />
    </Switch>
  )
}

export default Tets
