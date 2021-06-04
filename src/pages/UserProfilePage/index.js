import React, { useState } from "react"
import Breadcrumb from "../../common/components/Breadcrumb"
import { GoLocation, GoMail } from "react-icons/go"
import { AiOutlinePhone } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { storage } from "../../Firebases"
import validate from "./hooks/validate"
import { updateProfileApi } from "../../redux/_actions/Auth/user.Action"
const UserProfilePage = ({ user }) => {
  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState(user.user.avatar)
  const [fullName, setFullName] = useState(user.user.fullName)
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState(user.user.email)
  const [phone, setPhone] = useState(user.user.phone)
  const [address, setAddress] = useState(user.user.address)

  const [image, setImage] = useState(null)

  const [flag, setFlag] = useState(false)
  const onChangeImage = e => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const check = file.name.match(/\.(jpg|jpeg|png|gif)$/)
      if (check) {
        setImage(file)
        setAvatar(URL.createObjectURL(file))
        setFlag(true)
      }
    }
  }
  const upLoad = e => {
    e.preventDefault()
    if (flag) {
      if (image === null) {
        return
      }
      const updateTask = storage.ref(`Avatar/${image.name}`).put(image)
      updateTask.on(
        "state_changed",
        snapshot => {},
        error => console.error(error),
        async () => {
          const res = await storage
            .ref("Avatar")
            .child(image.name)
            .getDownloadURL()
          // res && upDatabase(nameRef.current.value, res)
          const isValidate = validate({ fullName, address, phone })
          if (!isValidate) return
          isValidate.image = res

          dispatch(updateProfileApi(isValidate))
          return
          // hidden()
        }
      )
    } else {
      const isValidate = validate({ fullName, address, phone })
      if (!isValidate) return
      isValidate.image = avatar

      dispatch(updateProfileApi(isValidate))
      return
    }
  }
  return (
    <>
      <Breadcrumb namePage="Profile" preLink={{ name: "Home" }} />
      <section className="contact-section padding_top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Current Profile</h2>
            </div>
            <div className="col-lg-8">
              <form className="form-contact contact_form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        defaultValue={fullName}
                        onChange={e => {
                          setFullName(e.target.value)
                        }}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        defaultValue={email}
                        readOnly
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="phone"
                        id="phone"
                        type="text"
                        defaultValue={phone}
                        onChange={e => {
                          setPhone(e.target.value)
                        }}
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="address"
                        id="address"
                        type="address"
                        placeholder="Enter address"
                        onChange={e => {
                          setAddress(e.target.value)
                        }}
                        defaultValue={address}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="file"
                        hidden
                        id="inputImg"
                        onChange={onChangeImage}
                      />
                      <label
                        htmlFor="inputImg"
                        className="form-control"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        Choose Avatar
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button className="btn_3 button-contactForm" onClick={upLoad}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info ">
                <div className="media-body imgProfile">
                  <img
                    src={avatar}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%"
                    }}
                  />
                  <h3>{fullName}</h3>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <GoMail />
                </span>
                <div className="media-body">
                  <h3>{email}</h3>
                </div>
              </div>

              <div className="media contact-info">
                <span className="contact-info__icon">
                  <AiOutlinePhone />
                </span>
                <div className="media-body">
                  <h3>{phone}</h3>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <GoLocation />
                </span>
                <div className="media-body">
                  <h3>{address}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfilePage
