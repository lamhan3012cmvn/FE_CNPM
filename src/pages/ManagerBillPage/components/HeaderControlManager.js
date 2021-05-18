import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const HeaderControlManager = () => {
  return (
    <div className="wrap-filter row mt-5">
      <div className="wrap-search">
        <div className="input-group md-form form-sm form-2 pl-0">
          <input
            className="form-control my-0 py-1 amber-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <span
              className="input-group-text amber lighten-3"
              style={{ backgroundColor: "transparent" }}
              id="basic-text1"
            >
              <AiOutlineSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderControlManager
