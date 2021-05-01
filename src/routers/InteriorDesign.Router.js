import { Switch, Route } from "react-router-dom"
import { PATH } from "../common/constants/path"
import InteriorDesignPage from "../pages/InteriorDesignPage"
const InteriorDesignRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.interiorDesign}
        component={() => <InteriorDesignPage />}
      />
    </Switch>
  )
}

export default InteriorDesignRouter
