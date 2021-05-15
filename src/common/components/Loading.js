import "./Loading.Style.css"
import RingLoader from "react-spinners/RingLoader"
import { css } from "@emotion/core"
import { useSelector } from "react-redux"

const override = css`
  display: block;
`

const Loading = () => {
  const l = useSelector(state => state.system.loading)
  return l ? (
    <div id={`loading`}>
      <div className="wave">
        <RingLoader
          css={override}
          color={"#FF0046"}
          loading={true}
          size={150}
        />
      </div>
    </div>
  ) : (
    ""
  )
}

export default Loading
