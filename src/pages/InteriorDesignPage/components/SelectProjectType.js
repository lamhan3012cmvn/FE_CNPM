const SelectProjectType = props => {
  const { projectType } = props
  const changeActive = e => {
    const element = e
  }
  const renderType = () => {
    return projectType.map(e => {
      return (
        <div
          className="col-lg-4 col-sm-6 ProjectType"
          onClick={changeActive}
          key={e.id}
        >
          <h3 className="active">{e.type}</h3>
        </div>
      )
    })
  }
  return projectType ? (
    <section style={{ padding: "30px 0px" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {renderType()}
        </div>
      </div>
    </section>
  ) : (
    ""
  )
}

export default SelectProjectType
