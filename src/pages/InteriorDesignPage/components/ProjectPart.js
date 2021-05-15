import TitleList from "../../../common/components/TitleList"
import CartInterior from "./CartInterior"

const ProjectPart = props => {
  const { content, CartsInterior = [] } = props

  const render = () => {
    return CartsInterior ? (
      CartsInterior.map(e => (
        <div className="col-lg-4 col-sm-6" style={{ paddingTop: "50px" }}>
          <CartInterior />
        </div>
      ))
    ) : (
      <h3>Empty</h3>
    )
  }
  return (
    <section className="product_list section_padding">
      <div className="container">
        {props.children}
        <TitleList title="Project" content={content} />
        <div className="row align-items-center justify-content-center">
          {render()}
        </div>
      </div>
    </section>
  )
}

export default ProjectPart
