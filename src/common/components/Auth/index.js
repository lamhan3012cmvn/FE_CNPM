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
      if (res && !res.isAuth) {
        if (option) {
          history.push("/login")
        }
      } else {
        //đã đăng nhập
        if (adminRoute && !res.payload.isAdmin) {
          //Kiểm tra khong phai admin
          history.push("/")
        } else {
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
    //Đã có login
    return <SpecificComponent {...props} user={user} />
  }
  return AuthenticationCheck
}
export default Authentication
