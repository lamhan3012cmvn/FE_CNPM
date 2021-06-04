import React from "react"
import ReactPaginate from "react-paginate"
import { FcPrevious, FcNext } from "react-icons/fc"
import { HiDotsHorizontal } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../../redux/_actions/Product/Category/category.Action"
const Pageination = () => {
  const dispatch = useDispatch()

  const pageCount = useSelector(state => state.product.pages)
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
          pageCount={pageCount}
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
