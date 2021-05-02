import { Switch, Route } from "react-router-dom"
import { PATH } from "../common/constants/path"
import InteriorDesignPage from "../pages/InteriorDesignPage"
import SingleInteriorPage from "../pages/SingleInteriorPage"
const InteriorDesignRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.interiorDesign}
        component={() => <InteriorDesignPage />}
      />
      <Route
        exact
        path={`${PATH.interiorDesign}/:interiorID`}
        component={() => <SingleInteriorPage />}
      />
    </Switch>
  )
}

export default InteriorDesignRouter
