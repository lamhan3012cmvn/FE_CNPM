import validator from "validator"
import notify from "../../../common/Notify"

const validate = (Email, Password, Otp) => {
  const isEmail = validator.isEmail(Email)
  if (!isEmail) {
    notify("Email khong hop le")
    return false
  }
  const isPassword = validator.isEmpty(Password)
  if (isPassword) {
    notify("Vui long nhap lai mat khau")
    return false
  }
  const isOtp = validator.isEmpty(Otp)
  if (isOtp) {
    notify("Vui long nhap ma otp")
    return false
  }

  return {
    Email,
    Password,
    Otp
  }
}

export default validate
