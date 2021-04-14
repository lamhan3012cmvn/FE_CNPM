import * as actionTypes from "../constants/oderConstants"
import axios from "axios"

export const addToOder = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/cart/${slug}`)
  dispatch({
    type: actionTypes.ADD_TO_ODER,
    payload: {
      product: data.id,
      name: data.product_name,
      imageUrl: data.product_thumbnail,
      price: data.product_price,
      countInStock: data.product_quantity,
      slug: data.product_slug,
      qty
    }
  })
  localStorage.setItem("oder", JSON.stringify(getState().oder.oderItem))
}

export const removeFromOrder = id => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_ODER,
    payload: id
  })
  localStorage.setItem("oder", JSON.stringify(getState().oder.oderItem))
}
