import * as actionTypes from "../constants/cartConstants"
import axios from "../configAxios"
import { getSession, setSession } from "../../constants/function"

export const addToCart = (slug, qty, id, price) => async (
  dispatch,
  getState
) => {
  const { user } = getSession("users")

  const { data } = await axios.post(`/detail/${slug}`, {
    product_id: id,
    price: price,
    quantity: qty,
    user_id: user.id
  })
}

export const getCart = user_id => async (dispatch, getState) => {
  const { data } = await axios.get(`/cart`, {
    params: {
      user_id: user_id
    }
  })

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: data
  })
}

export const qtyToCart = (
  id,
  product_id,
  quantity,
  check,
  total,
  price
) => async (dispatch, getState) => {
  if (check == 1) {
    //console.log("ss", id, product_id, qty);
    const { data } = await axios.post(`/sub-quantity`, {
      user_id: getState().users.user.id,
      order_detail_id: id,
      product_id: product_id,
      quantity: quantity
    })

    dispatch({
      type: actionTypes.SUB_QTY_FROM_CART,
      payload: {
        product: id,
        quantity,
        total: total - price
      }
    })
  } else {
    const { data } = await axios.post(`/plus-quantity`, {
      user_id: getState().users.user.id,
      order_detail_id: id,
      product_id: product_id,
      quantity: quantity
    })
    dispatch({
      type: actionTypes.PLUS_QTY_FROM_CART,
      payload: {
        product: id,
        quantity,
        total: total + price
      }
    })
  }

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem))
}

export const removeFromCart = (id, total, rmvtotal) => async (
  dispatch,
  getState
) => {
  const { data } = await axios.post(`/del-product-cart`, {
    order_detail_id: id
  })
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id, total: total - rmvtotal }
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem))
}
