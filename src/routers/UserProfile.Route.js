import React, { lazy } from "react"
import { Route, Switch } from "react-router"
import { PATH } from "../common/constants/path"
const lazyLoading = () => {
  return lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => resolve(import("../pages/UserProfilePage")), 500)
      })
  )
}
const page = lazyLoading()

const UserProfile = () => {
  return (
    <Switch>
      <Route exact path={PATH.userProfile} component={page} />
    </Switch>
  )
}

export default UserProfile
