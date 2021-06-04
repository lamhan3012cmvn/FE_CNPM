import validator from "validator"
import notify from "../../../common/Notify"

const validate = ({ fullName, address, phone }) => {
  const isFullName = validator.isEmpty(fullName)
  if (isFullName) {
    notify("Vui long nhap full name")
    return false
  }
  const isPhone = validator.isEmpty(phone) && validator.isMobilePhone(phone)
  if (isPhone) {
    notify("Vui long nhap dung sdt")
    return false
  }
  const isAddress = validator.isEmpty(address)
  if (isAddress) {
    notify("Vui long nhap full name")
    return false
  }
  return { fullName, address, phone }
}

export default validate
