import React from "react"

const TitleList = props => {
  const { title, content } = props
  return (
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="section_tittle text-center">
          <h2>
            {title} <span>{content}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default TitleList
