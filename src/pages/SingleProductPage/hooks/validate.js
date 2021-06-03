import validator from "validator"
import notify from "../../../common/Notify"

const validate = Review => {
  const isReview = validator.isEmpty(Review.trim())
  if (isReview) {
    notify("Review is empty")
    return false
  }
  return {
    Review
  }
}

export default validate
