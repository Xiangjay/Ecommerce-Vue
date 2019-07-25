var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//商品模型
var productSchema = new Schema({
  "productId": String,
  "productName": String,
  "productPrice": Number,
  "productImg": String,
  "checked": Boolean,
  "productNum": Number
})

module.exports = mongoose.model('Product', productSchema);
