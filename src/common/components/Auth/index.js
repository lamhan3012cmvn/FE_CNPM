import { useEffect } from "react"
import { auth } from "../_actions/user_actions"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const Authentication = (SpecificComponent, option, adminRoute = null) => {
  function AuthenticationCheck(props) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
      //To know my current status, send Auth request
      dispatch(auth()).then(response => {
        //Not Loggined in Status
        if (!response.payload.isAuth) {
          if (option) {
            history.push("/login")
          }
          //Loggined in Status
        } else {
          //supposed to be Admin page, but not admin person wants to go inside
          if (adminRoute && !response.payload.isAdmin) {
            history.push("/")
          }
          //Logged in Status, but Try to go into log in page
          else {
            if (option === false) {
              history.push("/")
            }
          }
        }
      })
    }, [])
    return <SpecificComponent {...props} user={user} />
  }
  return AuthenticationCheck
}
export default Authentication
