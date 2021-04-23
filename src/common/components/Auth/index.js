/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { authRequest } from "../../../redux/_actions/Auth/user.Action"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const Authentication = (SpecificComponent, option, adminRoute = null) => {
  function AuthenticationCheck(props) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const fetchAuth = async () => {
      const res = await dispatch(authRequest())
      if (res.payload && !res.payload.isAuth) {
        if (option) {
          history.push("/login")
        }
        //Loggined in Status
      } else {
        //supposed to be Admin page, but not admin person wants to go inside
        if (adminRoute && !res.payload.isAdmin) {
          history.push("/")
        }
        //Logged in Status, but Try to go into log in page
        else {
          if (option === false) {
            history.push("/")
          }
        }
      }
    }
    useEffect(() => {
      fetchAuth()

      //To know my current status, send Auth request
    }, [])
    return <SpecificComponent {...props} user={user} />
  }
  return AuthenticationCheck
}
export default Authentication
