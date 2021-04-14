import React from "react"
import { Route, Switch } from "react-router"
import Select from "react-select"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
]

const Tets = () => {
  return (
    <Switch>
      <Route
        path="/Test"
        exact
        component={() => <Select options={options} />}
      />
    </Switch>
  )
}

export default Tets
