import React from "react"
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import { FcPrevious, FcNext } from "react-icons/fc"
import { HiDotsHorizontal } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { changePage } from "../../redux/_actions/Product/Category/category.Action"
const Pageination = () => {
  const dispatch = useDispatch()
  const handleChangePage = e => {
    dispatch(changePage(e.selected + 1))
  }
  return (
    <div className="pageination">
      <nav>
        <ReactPaginate
          previousLabel={<FcPrevious />}
          nextLabel={<FcNext />}
          breakLabel={<HiDotsHorizontal />}
          breakClassName={"break-me"}
          pageCount={7}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handleChangePage}
          containerClassName={"pagination justify-content-center"}
          activeClassName={"active"}
        />
      </nav>
    </div>
  )
}

export default Pageination
