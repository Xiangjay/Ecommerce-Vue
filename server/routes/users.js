var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../models/users');
var generator = require('node-uuid-generator');
var format = require("node.date-time");

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_redo');

//监听数据库状态
mongoose.connection.on("connected", function() {
  console.log("MongoDB Connected Successfully!");
});

mongoose.connection.on("error", function() {
  console.log("MongoDB Connected fail!");
});
mongoose.connection.on("disconnected", function() {
  console.log("MongoDB Disconnected!");
});

/* check if new username is avaiable or not */
router.get('/checkUsername', function(req, res, next) {
  let userEmail = req.param("userEmail");
  users.findOne({
    userEmail: userEmail
  }, function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '',
          result: true
        })
      } else {
        res.json({
          status: '0',
          msg: '',
          result: false
        })
      }
    }
  })
});

/* login */
router.post("/login", function(req, res, next) {
  let params = {
    userEmail: req.body.userEmail,
    userPwd: req.body.userPwd
  }
  users.findOne(params, function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: '用户名或密码错误'
      })
    } else {
      if (doc) {
        res.cookie("userId", doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '账号或密码错误',
          result: '用户名或密码错误'
        })
      }
    }
  })
})

/* logout */
router.post('/logout', function(req, res, next) {
  res.cookie("userId", "", {
    path: '/',
    maxAge: 0
  });
  res.json({
    status: '0',
    msg: '',
    result: ''
  })
});

/* signup */
router.post('/signup', function(req, res, next) {
  let userEmail = req.body.userEmail;
  let userName = req.body.userName;
  let userPwd = req.body.userPwd;
  let newUser = new users({
    userId: generator.generate(),
    userEmail: userEmail,
    userName: userName,
    userPwd: userPwd,
    createDate: new Date().format("Y-MM-dd HH:mm:SS")
  })
  newUser.save(function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err1.message,
        result: 'error'
      })
    } else {
      res.cookie("userId", doc.userId, {
        path: '/',
        maxAge: 1000 * 60 * 60
      });
      res.cookie("userName", doc.userName, {
        path: '/',
        maxAge: 1000 * 60 * 60
      });
      res.json({
        status: '0',
        msg: '',
        result: {
          userName: newUser.userName
        }
      })
    }
  })
})

/* get cart count */
router.get('/getCartCount', function(req, res, next) {
  if (req.cookies.userId) {
    var userId = req.cookies.userId;
    users.findOne({
      userId: userId
    }, function(err, doc) {
      if (err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        let cartCount = 0;
        doc.cartList.map((item) => {
          cartCount += parseInt(item.productNum);
        })
        res.json({
          status: '0',
          msg: '',
          result: cartCount
        })
      }
    })
  }
})

/* checklogin */
router.get('/checklogin', function(req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName
    })
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    })
  }
  // if (req.cookies.userId) {
  //   let userId = res.cookies.userId;
  //   users.findOne({userId:userId},function(err,doc){
  //     if(err){
  //       res.json({
  //         status: '1',
  //         msg: '未登录',
  //         result: ''
  //       })
  //     }else{
  //       if(doc){
  //         res.json({
  //           status: '0',
  //           msg: '',
  //           result: req.cookies.userName
  //         })
  //       }
  //     }
  //   })
  // } else {
  //   res.json({
  //     status: '1',
  //     msg: '未登录',
  //     result: ''
  //   })
  // }
});

/* get cartlist */
router.get("/cartList", function(req, res, next) {
  let userId = req.cookies.userId;
  users.findOne({
    userId: userId
  }, function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: 'error'
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc.cartList
      })
    }
  })
})

/* edit cartlist */
router.post("/cart/edit", function(req, res, next) {
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  let productNum = req.body.productNum;
  let productchecked = req.body.productchecked;
  users.update({
    userId: userId,
    "cartList.productId": productId
  }, {
    "cartList.$.productNum": productNum,
    "cartList.$.checked": productchecked
  }, function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: 'edit successfully'
      })
    }
  })
})

/* delete product from cartlist */
router.post("/cart/del",function(req,res,next){
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  users.update({
    userId: userId
  }, {
    $pull: {
      'cartList': {
        'productId': productId
      }
    }
  }, function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: 'successfully delete'
      })
    }
  })
})

/* select all products in cartList*/
router.post("/cart/checkAll",function(req,res,next){
  let userId = req.cookies.userId;
  let checkAll = req.body.checkAll;
  users.findOne({userId:userId},function(err,user){
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    }else{
      if(user){
        user.cartList.forEach((item)=>{
          item.checked = checkAll;
        })
        user.save(function(err1,doc){
          if(err1){
            res.json({
              status: '1',
              msg: err1.message,
              result: ''
            })
          }else{
            res.json({
              status: '0',
              msg: '',
              result: 'checkAll successfully'
            })
          }
        })
      }else{
        res.json({
          status: '1',
          msg: 'no such user',
          result: 'no such user'
        })
      }
    }
  })
})

/* get address list */
router.get("/addressList",function(req,res,next){
  let userId = req.cookies.userId;
  users.findOne({userId:userId},function(err,doc){
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    }else{
      if(doc){
        res.json({
          status: '0',
          msg: '',
          result: doc.addressList
        })
      }
    }
  })
})

/* set default address */
router.post("/addressList/setDefault",function(req,res,next){
  let userId = req.cookies.userId;
  let addressId = req.body.addressId;
  users.findOne({userId:userId},function(err,userDoc){
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    }else{
      if(userDoc){
        userDoc.addressList.forEach(function(item){
          if(item.addressId == addressId){
            item.isDefault = true;
          }else{
            item.isDefault = false
          }
        })
        userDoc.save(function(err1,doc){
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
              result:'Set default successfully'
            })
          }
        })
      }else{
        res.json({
          status:'1',
          msg:err1.message,
          result:'no such user'
        })
      }
    }
  })
})

module.exports = router;
