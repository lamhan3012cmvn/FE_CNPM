import { toast } from "react-toastify"
const notify = content => {
  toast(content, {
    position: toast.POSITION.TOP_RIGHT,
    className: "error toast"
  })
}

export default notify
