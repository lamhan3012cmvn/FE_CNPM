/* eslint-disable import/no-anonymous-default-export */

import { GET_ALL_PRODUCT_SUCCESS } from "../../_actions/Product/Category/type"

const initState = {
  products: [
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_1.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_2.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_3.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_4.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_5.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_6.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_8.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_7.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    },
    {
      title: "undefined",
      price: "200",
      img:
        "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2Fproduct_8.png?alt=media&token=02674e95-6369-45f0-8734-51de82a4ac76"
    }
  ]
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT_SUCCESS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}
