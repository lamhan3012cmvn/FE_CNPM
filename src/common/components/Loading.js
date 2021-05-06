import "./Loading.Style.css"
import RingLoader from "react-spinners/RingLoader"
import { css } from "@emotion/core"

const override = css`
  display: block;
`

const Loading = () => {
  return (
    <div id="loading">
      <div className="wave">
        <RingLoader
          css={override}
          color={"#FF0046"}
          loading={true}
          size={150}
        />
      </div>
    </div>
  )
}

export default Loading
