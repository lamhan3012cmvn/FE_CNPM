import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const RateProduct = props => {
  const { listRate, onChange } = props

  return (
    <ul className="list">
      {listRate.map((elm, index) => {
        return (
          <li onClick={() => onChange(index)}>
            <span>{elm ? <BsStarFill /> : <BsStar />}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default RateProduct
