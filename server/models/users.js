var mongoose = require('mongoose');
//用户模型
var userSchema = new mongoose.Schema({
  "userId": String,
  "userEmail": String,
  "userName": String,
  "userPwd": String,
  "createDate":String,
  "cartList": [
    {
      "productId": String,
      "productName": String,
      "productPrice": Number,
      "checked": Boolean,
      "productNum": Number,
      "productImg": String
    }
  ],
  "addressList": [
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "postCode": Number,
      "tel": Number,
      "isDefault": Boolean
    }
  ],
  "orderList": [         //一个用户的购物车里可以有多个商品，所以这里是个数组
    {
      "orderId": String,
      "totalPrice": String,
      "addressInfo": [
        {
          "addressId": String,
          "userName": String,
          "streetName": String,
          "postCode": Number,
          "tel": Number,
          "isDefault": Boolean
        }
      ],
      "productsList": [
        {
          "productId": String,
          "productName": String,
          "productPrice": Number,
          "checked": String,
          "productNum": Number,
          "productImg": String
        }
      ],
      "orderStatus": String,
      "createDate": String
    }
  ]
})

module.exports = mongoose.model('User', userSchema);
