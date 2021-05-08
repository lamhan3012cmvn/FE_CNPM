import LoginRegisterPart from "../../common/components/LoginRegisterPart"
import { PATH } from "../../common/constants/path"
import FromVerify from "../VerifyPage/components/FromVerify"
const VerifyPage = () => {
  return (
    <section className="login_part padding_top">
      <div className="container">
        <div className="row align-items-center">
          <LoginRegisterPart
            title="One of us?"
            content="If you already has an account, just Verify Account. We've missed you!"
            link={PATH.login}
            txtLink="Sign In Now"
          />
          <FromVerify />
        </div>
      </div>
    </section>
  )
}

export default VerifyPage
