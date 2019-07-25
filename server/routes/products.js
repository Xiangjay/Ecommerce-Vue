var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../models/users');
var products = require('../models/products');

/* get products list */
router.get("/getlist",function(req,res,next){
  let params = {};
  let sort = req.param("sort");
  let page = parseInt(req.param("page"));
  let pageSize = parseInt(req.param("pageSize"));
  let skip = (page -1) * pageSize;
  let priceGte = parseInt(req.param("priceGte"));
  let priceLte = parseInt(req.param("priceLte"));
  if(priceGte == 0){
    priceGte = 1;
  }
  if(priceGte && priceLte){
    params = {
      productPrice:{
        $gte:priceGte,
        $lte:priceLte
      }
    }
  }
  let productsModel = products.find(params).skip(skip).limit(pageSize);
  productsModel.sort({'productPrice':sort});
  productsModel.exec({}, function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
})

/* add product to cart*/
router.post("/addCart",function(req,res,next){
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  users.findOne({userId: userId},function(err,userDoc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      let productItem = ''
      userDoc.cartList.forEach(function(item){
        if(item.productId == productId){
          productItem = item;
          item.productNum++;
        }
      })
      if(productItem){
        userDoc.save(function(err1,doc1){
          if(err1){
            res.json({
              status:'1',
              msg:err1.message
            })
          }
          else{
            res.json({
              status:'0',
              msg:'',
              result:'Successfully1'
            })
          }
        })
      }else{
        products.findOne({productId:productId},function(err1,productDoc){
          if(err1){
            res.json({
              status:'1',
              msg:err.message
            })
          }else{
            productDoc.productNum = 1;
            productDoc.checked = true;
            userDoc.cartList.push(productDoc);
            userDoc.save(function(err2,doc2){
              if(err2){
                res.json({
                  status:'1',
                  msg:err2.message
                })
              }
              else{
                res.json({
                  status:'0',
                  msg:'',
                  result:'Successfully2'
                })
              }
            })
          }
        })
      }
    }
  })
})

module.exports = router;
