import { PATH } from "../common/contants/path"
import { Switch, Route } from "react-router-dom"
import SingleProductPage from "../pages/SingleProductPage"
const SingleProductRouter = () => {
  return (
    <Switch>
      <Route path={PATH.singleProduct} exact component={() => <SingleProductPage />} />
    </Switch>
  )
}

export default SingleProductRouter
