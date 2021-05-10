import { Link } from "react-router-dom"
import { PATH } from "../constants/path"
const ProductItem = props => {
  const { product } = props

  const render = () => {
    return (
      <Link to={`${PATH.singleProduct}/${product._id}`}>
        <div className="single_product_item">
          <img src={product.Image} alt="" />
          <div className="single_product_text">
            <h4>{product.Name}</h4>
            <h3>${product.Price}</h3>
            <span to="#" className="add_cart">
              + add to cart<i className="ti-heart"></i>
            </span>
          </div>
        </div>
      </Link>
    )
  }
  return render()
}

export default ProductItem
