import LoginRegisterPart from "../../../common/components/LoginRegisterPart"
import { PATH } from "../../../common/constants/path"
import FromLogin from "./FromLogin"
const Login = () => {
  return (
    <section className="login_part padding_top">
      <div className="container">
        <div className="row align-items-center">
          <LoginRegisterPart
            title="New to our Shop?"
            content=" There are advances being made in science and technology
                  everyday, and a good example of this is the"
            link={PATH.register}
            txtLink="Create an Account"
          />
          <FromLogin />
        </div>
      </div>
    </section>
  )
}

export default Login
