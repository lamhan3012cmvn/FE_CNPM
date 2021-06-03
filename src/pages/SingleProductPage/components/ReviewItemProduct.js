import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"

const ReviewItemProduct = ({ currentRate }) => {
  const renderStart = () => {
    const arrStart = []
    for (let i = 0; i < 5; i++) {
      if (i < currentRate.value) {
        arrStart.push(<BsStarFill />)
      } else arrStart.push(<BsStar />)
    }
    return arrStart
  }
  return (
    <div className="review_item">
      <div className="media">
        <div className="d-flex">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2FBanAnGo%2Fban-an-go-gina-71309003-3.jpg?alt=media&token=115f7d4a-8036-46c3-892f-f8f1594b5114"
            }
            alt=""
          />
        </div>
        <div className="media-body">
          <h4>{currentRate.comment[0].current.fullName}</h4>
          {renderStart()}
        </div>
      </div>
      <p>{currentRate.comment[0].content}</p>
    </div>
  )
}

export default ReviewItemProduct
