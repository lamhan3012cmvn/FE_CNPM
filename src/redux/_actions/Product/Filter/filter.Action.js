import ProductApi from "../../../../Apis/Product.Api"
import {
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_FILTER_SUCCESS,
  GET_ALL_ROOM_FAIL,
  GET_ALL_ROOM_SUCCESS
} from "./type"

// export function getAllRoomsSuccess(data) {
//   return {
//     type: GET_ALL_ROOM_SUCCESS,
//     payload: data
//   }
// }

// export function getAllRoomsFail() {
//   return {
//     type: GET_ALL_ROOM_FAIL,
//     payload: []
//   }
// }

// export const getAllRoomApi = () => async dispatch => {
//   try {
//     const data = await roomApi.getAll()
//     dispatch(getAllRoomsSuccess(data))
//     return true
//   } catch (err) {
//     console.log(err)
//     dispatch(getAllRoomsFail())
//     return false
//   }
// }

// export function getAllCategoriesSuccess(data) {
//   return {
//     type: GET_ALL_CATEGORY_SUCCESS,
//     payload: data
//   }
// }

// export function getAllCategoriesFail() {
//   return {
//     type: GET_ALL_CATEGORY_FAIL,
//     payload: []
//   }
// }

// export const getAllCategoryApi = () => async dispatch => {
//   try {
//     const data = await categoryApi.getAll()
//     dispatch(getAllCategoriesSuccess(data))
//     return true
//   } catch (err) {
//     console.log(err)
//     dispatch(getAllCategoriesFail())
//     return false
//   }
// }

export const getAllFilterSuccess = data => {
  return {
    type: GET_ALL_FILTER_SUCCESS,
    payload: data
  }
}

export const getAllFilterFail = () => {
  return {
    type: GET_ALL_FILTER_SUCCESS,
    payload: {}
  }
}

export const getAllFilterApi = () => async dispatch => {
  try {
    const data = await ProductApi.getFilter()
    dispatch(getAllFilterSuccess(data))
  } catch (err) {
    console.log(err)
    dispatch(getAllFilterFail())
  }
}
