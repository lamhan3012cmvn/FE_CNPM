import LoginRegisterPart from "../../common/components/LoginRegisterPart"
import { PATH } from "../../common/constants/path"
import FromRegister from "./components/FromRegister"
const RegisterPage = () => {
  return (
    <section className="login_part padding_top">
      <div className="container">
        <div className="row align-items-center">
          <FromRegister />
          <LoginRegisterPart
            title="One of us?"
            content="If you already has an account, just sign in. We've missed you!"
            link={PATH.login}
            txtLink="Sign In Now"
          />
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
