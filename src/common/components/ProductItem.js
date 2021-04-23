import { Link } from "react-router-dom"
import img1 from "../../img/product/product_1.png"
const ProductItem = () => {
  return (
    <>
      <div className="single_product_item">
        <img src={img1} alt="" />
        <div className="single_product_text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
          <Link to="#" className="add_cart">
            + add to cart<i className="ti-heart"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductItem
