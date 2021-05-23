import React, { useEffect } from "react"
import Breadcrumb from "../../common/components/Breadcrumb"

import HeaderTitleManager from "./components/HeaderTitleManager"
import HeaderControlManager from "./components/HeaderControlManager"
import BodyManager from "./components/BodyManager"

import { useDispatch } from "react-redux"
import { getBillStatusApi } from "../../redux/_actions/BillManager/billManager.Action"
import { useSelector } from "react-redux"
import { getStatus } from "../../common/functions"
import { objStatus } from "../../common/constants/default"
const ManagerBillPage = () => {
  const statusAction = useSelector(state => state.billManager.statusBill)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillStatusApi(statusAction))
  }, [dispatch, statusAction])
  return (
    <>
      <Breadcrumb />
      <section className="section_padding">
        <div className="container">
          <div className="wrap-status">
            <h1 className="status font-weight-normal tatCa">
              {getStatus(objStatus, statusAction)}
            </h1>
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
