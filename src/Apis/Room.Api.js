/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "room/"
const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}getRooms`)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}
const Room = { getAll }

export default Room
