/* eslint-disable import/no-anonymous-default-export */
import {} from "../../_actions/Auth/type"
import {
  GET_INTERIOR_DETAIL_FAIL,
  GET_INTERIOR_DETAIL_SUCCESS,
  GET_INTERIOR_FAIL,
  GET_INTERIOR_SUCCESS
} from "../../_actions/InteriorDesign/type"

const initState = {
  ImgBanner: [
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FBannerInteriorDesign%2Fslide-thiet-ke-noi-that-2.jpg?alt=media&token=064831d6-b63c-4ac0-8a8e-585be58485ee",
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FBannerInteriorDesign%2Fslide-thiet-ke-noi-that-3.jpg?alt=media&token=0fb53c95-ac9f-4306-b8e3-5a11d499131f"
  ],

  Apartment: [],
  singleApartment: {},
  idTypeInterior: "60a71c99869c300012a6193e"
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_INTERIOR_DETAIL_SUCCESS:
      return { ...state, singleApartment: action.payload }
    case GET_INTERIOR_DETAIL_FAIL:
      return { ...state, singleApartment: {} }
    case GET_INTERIOR_SUCCESS:
      return { ...state, Apartment: action.payload }
    case GET_INTERIOR_FAIL:
      return { ...state, Apartment: [] }
    default:
      return state
  }
}
