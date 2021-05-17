/* eslint-disable import/no-anonymous-default-export */
import {} from "../../_actions/Auth/type"

const initState = {
  ImgBanner: [
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FBannerInteriorDesign%2Fslide-thiet-ke-noi-that-2.jpg?alt=media&token=064831d6-b63c-4ac0-8a8e-585be58485ee",
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FBannerInteriorDesign%2Fslide-thiet-ke-noi-that-3.jpg?alt=media&token=0fb53c95-ac9f-4306-b8e3-5a11d499131f"
  ],

  Apartment: [
    {
      _id: "1",
      title: "Thiết kế căn hộ 186m2 chung cư The Legend",
      info: {
        project: "Chung cư The Legend –  4 phòng ngủ",
        style: "Hiện đại",
        S: "186m2"
      },
      description:
        "Yêu cầu của khách hàng sở hữu căn hộ chung cư The Legend có thể coi là một bài toán khó.\nGia chủ mong muốn tổ ấm của mình mang thiết kế hiện đại. Tuy nhiên trước khi cải tạo, căn hộ còn khá nhiều mảng màu lộn xộn, đặc biệt là các tone màu gỗ đang được sử dụng đều không thống nhất, có phong cách cũ và lỗi thời.\nGia đình có 2 bé nhỏ tuổi nên yêu cầu có những khoảng không gian thoáng đãng để các bé thỏa sức vui chơi tuy nhiên căn hộ vẫn phải đảm bảo đầy đủ tiện nghi và nhiều góc đặt đồ trang trí.\nGia chủ còn đặc biệt thích ánh nắng tự nhiên ngập tràn căn hộ. Ngoài ra một số góc sinh hoạt không được dịch chuyển, phải đặt đúng hướng như gia chủ yêu cầu",
      Images: [
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(1).jpg?alt=media&token=23b7fb78-3f29-4b8d-a49b-408170f2647a",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(11).jpg?alt=media&token=f80025ff-6912-4a6c-abf4-ef68ca2af843",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(10).jpg?alt=media&token=c0222b0c-b0f6-4ff0-8042-1f0bb49a9620",
          content:
            "Phòng ngủ được thiết kế khá đơn giản theo yêu cầu của chủ nhà, để dành nhiều không gian cho bé 1 tuổi của gia đình."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(12).jpg?alt=media&token=fa1a0221-dc5d-4dfb-ad4c-32817d7cc876",
          content:
            "Phòng ngủ Master với tông màu sáng và hiện đại của gỗ sồi, vân gỗ kết hợp hài hòa với màu sàn cũ của căn hộ mà không gây cảm giác mâu thuẫn."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(13).jpg?alt=media&token=f9dfdc06-95b6-4cb0-81f0-c93ed7c54ba0",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(14).jpg?alt=media&token=12e6ce08-0c87-4b6a-86d2-343f4a739b95",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(15).jpg?alt=media&token=2a7c7e8b-2c04-40ff-844b-69488f54dd4c",
          content:
            "Theo yêu cầu của gia chủ, vị trí đặt bàn thờ không được thay đổi để đảm bảo tài lộc và thịnh vượng cho gia đình."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(2).jpg?alt=media&token=df93ce59-e875-4aa1-9ec1-a189a0be7347",
          content:
            "Khoảng không gian sau sofa được chọn là nơi dành cho các bé thỏa sức vui chơi"
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(8).jpg?alt=media&token=6a6cd71f-dabe-4b0a-a511-f2a9428b2d83",
          content:
            "Bàn ăn được tách biệt hẳn với phòng khách để dành không gian cho các bé vui chơi."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(5).jpg?alt=media&token=d1ce75e0-025c-4ff6-b717-be501d75cea6",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(4).jpg?alt=media&token=30b3e617-7d68-40df-8dbb-aaa46eae0c28",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(4).jpg?alt=media&token=30b3e617-7d68-40df-8dbb-aaa46eae0c28",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(7).jpg?alt=media&token=3e9de8e2-8882-440a-858a-ba23479b7162",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(3).jpg?alt=media&token=5b5639b7-a86c-4f62-8022-2716939a5502",
          content:
            "Vì gia chủ đặc biệt thích ánh sáng tự nhiên nên KTS đã khéo léo đặt một chiếc sofa giường bên cửa sổ, vừa khiến gia đình tận hưởng cảm giác thư giãn với ánh nắng, vừa đem lại cho căn phòng sự hiện đại và tăng tính thẩm mỹ."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fthelend%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(9).jpg?alt=media&token=f16069cc-54a4-49b4-8b48-d789f4b1d7b7",
          content: ""
        }
      ]
    },

    {
      _id: "2",
      title: "Thiết kế nội thất căn hộ 82m2 chung cư Florence Mỹ Đình",
      info: {
        project: "Chung cư Florence – 3 phòng ngủ",
        style: "Wabi Sabi",
        S: "82m2"
      },
      description:
        "Thấu hiểu rằng chủ nhà mong muốn có một không gian đề cao sự tự nhiên và tối giản, phong cách Wabi Sabi đã được KTS Nhà Đẹp lựa chọn để đem đến một diện mạo mới cho ngôi nhà.\nNếu bạn đã quen thuộc với nền thẩm mỹ phương Tây luôn coi trọng sự hoàn hảo và mực thước, thì phong cách đến từ Nhật Bản này lại là một luồng gió mới đề cao vẻ đẹp bất cân xứng, mộc mạc và bất toàn.",
      Images: [
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2F19b641adea03165d4f12.jpg?alt=media&token=abb87c92-4441-4aad-a5eb-5f07d86863e5",
          content:
            "Gam màu chủ đạo được sử dụng cho căn hộ là gam màu trung tính, các vật liệu tự nhiên và thô mộc được bài trí trong không gian."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2F70014e72eedc12824bcd.jpg?alt=media&token=e3ec746f-54f0-4d4a-9f30-11b72cdf32b8",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2F1726245484fa78a421eb.jpg?alt=media&token=e5a37acb-d2b8-4026-b764-34f95d39c6ba",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2F9026bc571cf9e0a7b9e8.jpg?alt=media&token=5f5b36b6-c502-41be-bfd6-465285461527",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2Fd9b5f4c4546aa834f17b.jpg?alt=media&token=ac953dfe-a493-41ba-8fdd-5c8941595857",
          content:
            "Các mảng tưởng được sơn với hiệu ứng giả vân bê tông, mang lại cảm giác nguyên sơ là đặc trưng phong cách Wabi Sabi."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FL%C3%A0m%20vi%E1%BB%87c%20%20(1).JPG?alt=media&token=4352e417-6ab1-4172-a862-49bb129e7fde",
          content: "Một phòng ngủ được cải tạo thành phòng làm việc."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FL%C3%A0m%20vi%E1%BB%87c%20%20(2).JPG?alt=media&token=4176c5ad-aaa1-452a-88ad-1be169c23413",
          content:
            "Cũng theo phong cách chủ đạo của cả căn hộ, phòng làm việc cũng được thiết kế theo phong cách Wabi Sabi, tạo cảm giác mộc mạc."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FL%C3%A0m%20vi%E1%BB%87c%20%20(3).JPG?alt=media&token=21953575-0c73-43b2-95c0-254adc241831",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FL%C3%A0m%20vi%E1%BB%87c%20%20(4).JPG?alt=media&token=967db519-837a-4c5e-acea-3afd1d8de784",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FPh%C3%B2ng%20ng%E1%BB%A7%20Master%20(1).JPG?alt=media&token=2362feda-7a9a-450b-ae78-36f14d6d2064",
          content:
            "Phòng ngủ master được sử dụng đá siêu nhẹ ở đầu giường, sắt sơn giả màu đồng tạo điểm nhấn cho căn phòng.    "
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FPh%C3%B2ng%20ng%E1%BB%A7%20Master%20(2).JPG?alt=media&token=7c47e878-becd-408d-9bb7-adf3a82e1cc4",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FPh%C3%B2ng%20ng%E1%BB%A7%20Master%20(3).JPG?alt=media&token=744fe91c-1067-4636-8859-ee4ccdde6675",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FPh%C3%B2ng%20ng%E1%BB%A7%20nh%E1%BB%8F%20(1).JPG?alt=media&token=c1567c8a-fe36-40d4-953e-21fabbf7a4bb",
          content:
            "Phòng ngủ cho bé trai được cải tạo vách ngăn để tạo thành tủ gió âm, tăng diện tích cho căn phòng. Gam màu gỗ sồi tươi sáng được sử dụng cho căn phòng này."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FPh%C3%B2ng%20ng%E1%BB%A7%20nh%E1%BB%8F%20(2).JPG?alt=media&token=b8169ed1-7187-4089-bdf5-276b9bc0172f",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fbadinh%2FPh%C3%B2ng%20ng%E1%BB%A7%20nh%E1%BB%8F%20(3).JPG?alt=media&token=a74e7ce7-0a1b-45b6-953c-f2e945dc9ac0",
          content: ""
        }
      ]
    },

    {
      _id: "3",
      title:
        "Thiết kế nội thất căn hộ 124.6m2 chung cư Premier Berriver Long Biên",
      info: {
        project: "Chung cư Premier Berriver Long Biên – 3 phòng ngủ",
        style: "Hiện đại",
        S: "124.6m2"
      },
      description:
        "🔸 Căn hộ chung cư Premier Berriver Long Biên được thiết kế theo yêu cầu của khách hàng với phong cách hiện đại, đơn giản nhưng vẫn đem lại sự thoải mái cho gia đình.\n🔸 Căn hộ nổi bật với nét tinh tế được thể hiện qua cách sử dụng tone màu trung tính như xám hay nâu, sự kết hợp màu sắc này tuy đơn giản nhưng không bao giờ lỗi thời và gây cảm giác đơn điệu.\n🔸 Bàn làm việc được đưa ra phòng khách, tạo thành điểm nhấn cho một không gian mở hết sức phóng khoáng.",
      Images: [
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn1.JPG?alt=media&token=6f1bad29-a2a4-4e1e-9b9f-b485a6633d98",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn2.JPG?alt=media&token=f387d4fe-914c-45cd-92b1-8f38a0bb956a",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn3.JPG?alt=media&token=493428c2-7738-4f82-bf07-84de02a29089",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn4.JPG?alt=media&token=b2742dda-23d8-46f2-8b7b-74892915baf4",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn5.JPG?alt=media&token=cf140b91-f748-4637-ae10-1ec9a1dec6a3",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp10.JPG?alt=media&token=b3654fef-0af5-4e9a-bf3e-c93c42668b48",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp11.JPG?alt=media&token=d24631b1-d42b-4a85-b6f7-437c424ad34e",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp3.JPG?alt=media&token=e3bb1851-5cc6-4615-ae9f-527f77c3864c",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp4.JPG?alt=media&token=841e220c-a930-41b5-bb61-6bbfb7bac42c",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp7.JPG?alt=media&token=5190e1ed-db91-4d31-bcfa-85efc4dd1a16",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp8.JPG?alt=media&token=46d20127-163d-49dd-ba17-7e4f770d37b6",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbp9.JPG?alt=media&token=0713372a-e04e-455e-8d0a-ac26af730f8c",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn7.JPG?alt=media&token=e0ff8766-75d9-4a2d-a26a-c33803794217",
          content: ""
        },
        {
          img:
            "linhttps://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Flongbien%2Fbpn9.JPG?alt=media&token=e01744fd-6752-4246-b921-b94df65510d6k",
          content: ""
        }
      ]
    },

    {
      _id: "3",
      title: "Thiết kế nội thất căn hộ 81.01m2 Hinode City",
      info: {
        project: " Hinode City –  2 phòng ngủ ",
        style: "Nhật Bản",
        S: "81.01m2"
      },
      description:
        "Đặc trưng trong phong cách nội thất Nhật Bản là thiết kế tối giản nhưng vẫn tinh tế và đảm bảo được sự tiện dụng. Phong cách này rất phổ biến trên thế giới và ngày càng được ưa chuộng tại Việt Nam bởi các gia đình trẻ. ",
      Images: [
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%203.JPG?alt=media&token=ff752a83-3d65-4f18-9fa7-8d5681f3cc8a",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%201.JPG?alt=media&token=abcce92e-33e0-48ce-baba-7b8d903bf337",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%204.JPG?alt=media&token=dc60b218-ead6-47cc-b0c5-fcacf5861dac",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%207.JPG?alt=media&token=6e9a9761-5fc4-4d5b-845f-1fcdc524e926",
          content:
            "Kiến trúc sư đã nâng sàn đế của phòng khách để tạo cảm giác đặc trưng phong cách Nhật, tránh cảm giác ngồi quá thấp khi ngồi ăn và tiếp khách."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%208.JPG?alt=media&token=f9eeb64c-1f78-4eff-b677-95b625e764ea",
          content:
            "Đặc trưng trong phong cách Nhật được được thể hiện qua các đồ vật trang trí, hệ thống cửa trượt."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%2010.JPG?alt=media&token=e1abf309-5135-4b7e-93d2-5218548004bd",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fkhach%209.JPG?alt=media&token=43644ba6-a385-4fa5-adad-a47015317db7",
          content:
            "Gian bếp được thêm vách ngăn bằng cửa trượt để tránh mùi ảnh hưởng đến phòng khách."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fmaster1.JPG?alt=media&token=47ec6860-f997-4b1a-9b9f-eed60053ab01",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fmaster2.JPG?alt=media&token=62faa8cb-28fd-4780-aec3-6ac5ce6a99f3",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fmaster3.JPG?alt=media&token=7a8b28f7-3212-4790-bc7d-502b6d33cc59",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fmaster4.JPG?alt=media&token=39d24267-b895-4d04-886d-566dab2cdc5c",
          content:
            "Phòng ngủ master được thiết kế khá tối giản, tone màu chủ đạo trắng, kết hợp cùng màu gỗ sồi tự nhiên nhạt."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fngunho1.JPG?alt=media&token=db91bb2d-1464-4d8b-8958-5e73f9b22aeb",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fngunho2.JPG?alt=media&token=881efd2c-0a26-4a9e-a05a-40686bc11b73",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fngunho3.JPG?alt=media&token=c6ee6734-2d2a-497f-a245-ee2151db118d",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fhinodecity%2Fngunho4.JPG?alt=media&token=f2b0f7a6-4ffb-4d1d-936c-865ae4c1356d",
          content: ""
        }
      ]
    },

    {
      _id: "4",
      title: "Thiết kế nội thất căn hộ 89.2m2 Sunshine City",
      info: {
        project: "𝐒𝐮𝐧𝐬𝐡𝐢𝐧𝐞 𝐂𝐢𝐭𝐲 – 2 phòng ngủ + 1",
        style: "Hiện đại & Tân cổ điển",
        S: "89.2m2"
      },
      description:
        "Được cải tạo theo như gợi ý của Kiến trúc sư của Nhà Đẹp, căn hộ 89.9m2 mang lại cảm giác rộng rãi hơn rất nhiều.",
      Images: [
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F08837a0eae5b52050b4a.jpg?alt=media&token=ace572d5-78dc-4e51-b5ea-cb372b3e4897",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F26db61afb5fa49a410eb.jpg?alt=media&token=30c829bb-24a0-48fd-a308-877d1f578b20",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F29b81635c2603e3e6771.jpg?alt=media&token=8de5939a-4984-41f3-bdd9-3860dee2d964",
          content:
            "Điểm nhấn là những chi tiết bằng kim loại đem lại cảm giác hiện đại cho căn hộ."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F475ac8d61c83e0ddb992.jpg?alt=media&token=b50396e8-06a7-4983-a688-08f66b6ff638",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F58852f04fb51070f5e40.jpg?alt=media&token=66f9da01-9117-4f27-9d1e-99d24d86ff30",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F667d7c13a84654180d57.jpg?alt=media&token=5d2a879d-4f66-4aa4-866b-28f23465dbd2",
          content:
            "KTS bỏ vách ngăn phòng đa năng, nới rộng không gian bếp, tạo ra tổng thể rộng rãi và hài hòa."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F04b38ec55a90a6ceff81.jpg?alt=media&token=2d566864-eeb8-433f-ba87-58034b3ca53c",
          content: ""
        },
        {
          img:
            "https://console.firebase.google.com/u/1/project/cnpm-e5af3/storage/cnpm-e5af3.appspot.com/files~2FCategory~2FDuAn~2FchungCu~2Fsuncity",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F51d401a7d5f229ac70e3.jpg?alt=media&token=fe2f824d-be20-4e41-944e-b083ae7a9cb5",
          content:
            "Phòng ngủ master được thiết kế tối giản, tone màu chủ đạo vẫn là trắng và ghi xám thanh lịch, hiện đại."
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2F96a199244d71b12fe860.jpg?alt=media&token=9d4ed8c8-c59c-4a90-a836-c1bb95851438",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2Faad90aa9defc22a27bed.jpg?alt=media&token=e8932442-7b6d-4152-bdee-83519a0fb29e",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2Fbd399c424817b449ed06.jpg?alt=media&token=ac739578-a234-430a-bc1d-9b5d3995dcdd",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2Fcd600d09d95c25027c4d.jpg?alt=media&token=f7db8882-a5bc-4087-a620-7ef6b9c5db3c",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsuncity%2Ff5e63067e432186c4123.jpg?alt=media&token=b4cefbd6-393b-4592-8d40-aafa3853af60",
          content: ""
        }
      ]
    },

    {
      _id: "5",
      title: "Thiết kế nội thất căn hộ 77m2 chung cư Smart City",
      info: {
        project: "Chung cư 2 phòng ngủ",
        style: "Scandinavian",
        S: "77m2"
      },
      description:
        "Mỗi gia chủ lại có những nhu cầu thiết kế nội thất khác nhau khi tìm đến Nhà Đẹp. Với các khách hàng có kế hoạch cụ thể về ngân sách, Nhà Đẹp sẽ nghiên cứu và đưa ra giải pháp, phù hợp cả về chi phí lẫn đảm bảo công năng và sự tiện nghi cho căn hộ.",
      Images: [
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FBEP-PKHACH.jpg?alt=media&token=f1453db2-4642-448e-934d-bdcb2881d510",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FBEP-PKHACH2.jpg?alt=media&token=0d284171-ff5a-4b69-8cc2-ccf772248f9d",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FCUACHINH-BANAN.jpg?alt=media&token=f3cae55e-0c29-4744-80ad-d495726852a0",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FMASTER2.jpg?alt=media&token=ce6c9512-d509-4ea4-8c96-1bfc280d12db",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FMASTER3.jpg?alt=media&token=75289606-0206-4d24-869f-9bf81f07a173",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FMASTER4.jpg?alt=media&token=24bd4c4d-187c-442a-a6bd-c2aae0ae52ce",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FNGUBE1.jpg?alt=media&token=a0ecb6e8-6255-4210-905e-8e1da5b22be2",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FNGUBE2.jpg?alt=media&token=854f08d8-ae39-4ed7-8848-5cbc48fe42b3",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FNGUBE3.jpg?alt=media&token=9ba0134f-2ece-4399-91e6-35bc70dc8e91",
          content: ""
        },
        {
          img:
            "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FPKHACH-BANAN.jpg?alt=media&token=f02d3c85-8e41-428b-a92e-eca5cd850c2d",
          content: ""
        }
      ]
    }
  ],
  singleApartment: {
    title: "Thiết kế nội thất căn hộ 77m2 chung cư Smart City",
    info: {
      project: "Chung cư 2 phòng ngủ",
      style: "Scandinavian",
      S: "77m2"
    },
    description:
      "Mỗi gia chủ lại có những nhu cầu thiết kế nội thất khác nhau khi tìm đến Nhà Đẹp. Với các khách hàng có kế hoạch cụ thể về ngân sách, Nhà Đẹp sẽ nghiên cứu và đưa ra giải pháp, phù hợp cả về chi phí lẫn đảm bảo công năng và sự tiện nghi cho căn hộ.",
    Images: [
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FBEP-PKHACH.jpg?alt=media&token=f1453db2-4642-448e-934d-bdcb2881d510",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FBEP-PKHACH2.jpg?alt=media&token=0d284171-ff5a-4b69-8cc2-ccf772248f9d",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FCUACHINH-BANAN.jpg?alt=media&token=f3cae55e-0c29-4744-80ad-d495726852a0",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FMASTER2.jpg?alt=media&token=ce6c9512-d509-4ea4-8c96-1bfc280d12db",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FMASTER3.jpg?alt=media&token=75289606-0206-4d24-869f-9bf81f07a173",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FMASTER4.jpg?alt=media&token=24bd4c4d-187c-442a-a6bd-c2aae0ae52ce",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FNGUBE1.jpg?alt=media&token=a0ecb6e8-6255-4210-905e-8e1da5b22be2",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FNGUBE2.jpg?alt=media&token=854f08d8-ae39-4ed7-8848-5cbc48fe42b3",
        content: "Lam Lma"
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FNGUBE3.jpg?alt=media&token=9ba0134f-2ece-4399-91e6-35bc70dc8e91",
        content: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Category%2FDuAn%2FchungCu%2Fsmartcity%2FPKHACH-BANAN.jpg?alt=media&token=f02d3c85-8e41-428b-a92e-eca5cd850c2d",
        content: ""
      }
    ]
  }
}
export default function (state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}
