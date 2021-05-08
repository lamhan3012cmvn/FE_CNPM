/* eslint-disable import/no-anonymous-default-export */

import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS
} from "../../_actions/Product/Category/type"

const initState = {
  products: [],
  productDetail: {
    Size: "150x90x75",
    Material: "Mặt gỗ công nghiệp phủ veneer, chân gỗ thịt",
    Guarantee: "Bảo hành 2 năm",
    isStatus: "",
    _id: "6095506e53a0fb4b2c0e6a23",
    Name: "Bàn ăn gỗ Gina",
    Code: "71309003",
    Quantity: "1 bàn ăn và 4 ghế ăn",
    Price: "5380000",
    Description:
      "Để lựa chọn cho gia đình mình một không gian lý tưởng, nơi mọi thành viên trong gia đình cùng nhau quây quần sau mỗi ngày làm việc mệt mỏi, hoặc tụ họp bạn bè mỗi dịp cuối tuần hẳn không ít gia chủ phải đau đầu trước muôn vàn lựa chọn đầy hấp dẫn. Nên mua bàn ăn gỗ hay bàn ăn kim loại? Bàn ăn mở rộng hay không mở rộng? Mua bàn ăn ở đâu? Bạn có rất nhiều câu hỏi cần được tư vấn để có thể đưa ra quyết định và chọn cho mình một bộ bàn ăn ưng ý nhất. Hăy đến với Nhà Đẹp, chúng tôi luôn sẵn sàng hỗ trợ bạn.",
    Image:
      "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2FBanAnGo%2Fbo-ban-an-go.jpg?alt=media&token=6135770b-768a-46fa-bf13-6bafbb000c56",
    FK_Room: "6095465553a0fb4b2c0e6a0e",
    FK_Category: "6095503f53a0fb4b2c0e6a22",
    createdAt: "2021-05-07T14:36:30.119Z",
    updatedAt: "2021-05-07T14:36:30.119Z",
    __v: 0
  },
  total: 0,
  limit: 10,
  page: 2
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT_SUCCESS:
      return { ...state, products: action.payload }
    case GET_ALL_PRODUCT_FAIL:
      return { ...state, products: action.payload }
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: action.payload }
    case GET_PRODUCT_DETAIL_FAIL:
      return { ...state, productDetail: action.payload }
    default:
      return state
  }
}
