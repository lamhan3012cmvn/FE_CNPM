import { useRef, useState } from "react"

const SelectProjectType = props => {
  const { projectType } = props
  const refProjectType = useRef(null)
  const changeActive = e => {
    const current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("active", "")
    e.target.className += " active"
  }
  const renderType = () => {
    return projectType.map(e => {
      return (
        <div
          className="col-lg-4 col-sm-6 ProjectType"
          onClick={changeActive}
          key={e.id}
        >
          <h3 className={e.active}>{e.type}</h3>
        </div>
      )
    })
  }
  return projectType ? (
    <section style={{ paddingBottom: "30px" }}>
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          ref={refProjectType}
        >
          {renderType()}
        </div>
      </div>
    </section>
  ) : (
    ""
  )
}

export default SelectProjectType
