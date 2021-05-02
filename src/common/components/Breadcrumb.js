const Breadcrumb = props => {
  const { namePage, preLink } = props
  return (
    <section className="breadcrumb breadcrumb_bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcrumb_iner">
              <div className="breadcrumb_iner_item">
                <h2>{namePage ? namePage : "...Page"}</h2>
                <p>
                  {preLink ? preLink.name : "...From"} <span>-</span>{" "}
                  {namePage ? namePage : "...Page"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
