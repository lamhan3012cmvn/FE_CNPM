import {
  GET_INTERIOR_SUCCESS,
  GET_INTERIOR_FAIL,
  GET_INTERIOR_DETAIL_SUCCESS,
  GET_INTERIOR_DETAIL_FAIL
} from "./type"

import interiorDesign from "../../../Apis/InteriorDesign.Api"

export function getInteriorSuccess(data) {
  return {
    type: GET_INTERIOR_SUCCESS,
    payload: data
  }
}
export const getInteriorFail = () => {
  return {
    type: GET_INTERIOR_FAIL,
    payload: []
  }
}

export const getInteriorApi = (
  id = "60a71c99869c300012a6193e"
) => async dispatch => {
  try {
    const resData = await interiorDesign.getAllInteriorDesignByType(id)
    console.log(
      `LHA:  ===> file: interior.Action.js ===> line 28 ===> resData`,
      resData
    )
    if (resData.success) {
      dispatch(getInteriorSuccess(resData.data))
    } else {
      dispatch(getInteriorFail())
    }
  } catch (err) {
    dispatch(getInteriorFail())
  }
}

export const getInteriorDetailSuccess = data => {
  return {
    type: GET_INTERIOR_DETAIL_SUCCESS,
    payload: data
  }
}
export const getInteriorDetailFail = () => {
  return {
    type: GET_INTERIOR_DETAIL_FAIL,
    payload: {}
  }
}

export const getInteriorDetailApi = id => async dispatch => {
  try {
    const resData = await interiorDesign.getAllInteriorDesignDetail(id)
    if (resData.success) {
      dispatch(getInteriorDetailSuccess(resData.data))
    } else {
      dispatch(getInteriorFail())
    }
  } catch (err) {
    dispatch(getInteriorDetailFail())
  }
}
