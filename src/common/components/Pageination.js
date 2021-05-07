import React from "react"
import { Link } from "react-router-dom"

const Pageination = () => {
  return (
    <div className="pageination">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link to="#" className="page-link" aria-label="Previous">
              <i className="ti-angle-double-left"></i>
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              5
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              6
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link" aria-label="Next">
              <i className="ti-angle-double-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pageination
