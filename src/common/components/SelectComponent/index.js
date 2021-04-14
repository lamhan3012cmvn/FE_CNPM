import React from "react"
import Select from "react-select"
import "./Style.css"
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ]

const SelectComponent = props => {
  const { options } = props
  return <Select className="selectCustom" options={options} />
}

export default SelectComponent
