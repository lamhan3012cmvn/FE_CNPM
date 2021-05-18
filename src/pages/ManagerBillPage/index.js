import React, { useState } from "react"
import Breadcrumb from "../../common/components/Breadcrumb"

import HeaderTitleManager from "./components/HeaderTitleManager"
import HeaderControlManager from "./components/HeaderControlManager"
import BodyManager from "./components/BodyManager"

const ManagerBillPage = () => {
  const [title, setTitle] = useState("Tất cả đơn hàng")

  return (
    <>
      <Breadcrumb />
      <section className="section_padding">
        <div className="container">
          <div className="wrap-status">
            <h1 className="status font-weight-normal tatCa">{title}</h1>
          </div>
          <div className="wrap-content mt-5">
            <HeaderTitleManager />
            <HeaderControlManager />
            <BodyManager />
          </div>
        </div>
      </section>
    </>
  )
}

export default ManagerBillPage
