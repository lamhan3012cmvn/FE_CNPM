import Breadcrumb from "../../common/components/Breadcrumb"
import CartArea from "../../common/components/CartArea"
const CartPage = () => {
  return (
    <>
      <Breadcrumb namePage="CartArea" preLink={{ name: "Home" }} />
      <CartArea />
    </>
  )
}

export default CartPage
