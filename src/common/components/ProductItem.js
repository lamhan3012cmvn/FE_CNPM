import { Link } from "react-router-dom"
const ProductItem = props => {
  const { product } = props

  const render = () => {
    return (
      <div className="single_product_item">
        <img src={product.Image} alt="" />
        <div className="single_product_text">
          <h4>{product.Name}</h4>
          <h3>${product.Price}</h3>
          <Link to="#" className="add_cart">
            + add to cart<i className="ti-heart"></i>
          </Link>
        </div>
      </div>
    )
  }
  return render()
}

export default ProductItem
