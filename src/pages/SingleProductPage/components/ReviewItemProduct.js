import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"

const ReviewItemProduct = () => {
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
          <h4>Blake Ruiz</h4>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo
      </p>
    </div>
  )
}

export default ReviewItemProduct
