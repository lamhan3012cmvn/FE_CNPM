import { Link } from "react-router-dom"
import { PATH } from "../constants/path"
import { FormatNumberToMoney } from "../functions"
const ProductItem = props => {
  const { product } = props

  const render = () => {
    return (
      <Link to={`${PATH.singleProduct}/${product._id}`}>
        <div className="single_product_item">
          <img src={product.Image[0]} alt="" />
          <div className="single_product_text">
            <h4>{product.Name}</h4>
            <h3>{FormatNumberToMoney(product.Price)}</h3>
            <span className="add_cart">
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
