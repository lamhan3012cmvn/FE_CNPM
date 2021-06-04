import ProductApi from "../../../../Apis/Product.Api"
import { GET_ALL_FILTER_SUCCESS } from "./type"

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
