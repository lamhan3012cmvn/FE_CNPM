/* eslint-disable import/no-anonymous-default-export */
import {} from "../../_actions/Auth/type"

const initState = {
  category: [
    {
      title: "Apple"
    },
    { title: "Apple1" },
    { title: "Apple2" },
    { title: "Apple3" }
  ],
  color: [
    {
      title: "red"
    },
    { title: "black" },
    { title: "white" }
  ]
}
export default function (state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}
