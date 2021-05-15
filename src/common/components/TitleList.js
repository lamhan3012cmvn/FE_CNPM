import React from "react"

const TitleList = props => {
  const { title } = props
  return (
    <div className="row justify-content-center" style={{ paddingTop: "30px" }}>
      <div className="col-lg-12">
        <div className="section_tittle text-center">
          <h2>{title}</h2>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default TitleList
