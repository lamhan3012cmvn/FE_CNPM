import img1 from "../../img/product/product_1.png"
const ProductItem = () => {
  return (
    <>
      <div class="col-lg-3 col-sm-6">
        <div class="single_product_item">
          <img src={img1} alt="" />
          <div class="single_product_text">
            <h4>Quartz Belt Watch</h4>
            <h3>$150.00</h3>
            <a href="#" class="add_cart">
              + add to cart<i class="ti-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
