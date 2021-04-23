import React from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"

const SearchHeader = props => {
  const { search, onChange } = props
  const render = () => {
    return (
      <div className="search_input" id="search_input_box">
        <div className="container ">
          <form className="d-flex justify-content-between search-inner">
            <input
              type="text"
              className="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn"></button>
            <span className="ti-close" onClick={onChange}>
              <AiOutlineCloseCircle />
            </span>
          </form>
        </div>
      </div>
    )
  }
  return search && render()
}

export default SearchHeader
