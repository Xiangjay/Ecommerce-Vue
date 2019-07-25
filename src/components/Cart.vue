<template>
  <div class="cartpage">
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <title>cart</title>
          <path class="path1"
            d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z">
          </path>
          <path class="path2"
            d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z">
          </path>
          <path class="path3"
            d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z">
          </path>
          <path class="path4"
            d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z">
          </path>
        </symbol>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1"
                d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 32 32">
          <title>ok</title>
          <path class="path1"
                d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1"
                d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path class="path1"
                d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
          <path class="path2"
                d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path3"
                d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path4"
                d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        </symbol>
      </defs>
    </svg>
    <nav-header></nav-header>
    <nav-bread>
      <li>购物车列表</li>
    </nav-bread>
    <div class="cartlist">
      <div class="cartlist-title">
        <h2><span>我的购物车</span></h2>
      </div>
      <div class="cartlist-items">
        <div class="cartlist-items-head">
          <ul>
            <li>Items</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
            <li>Edit</li>
          </ul>
        </div>
        <ul class="cartlist-items-list">
          <li v-for="item in cartList">
            <div class="cartlist-tab-1">
              <div class="cartlist-item-check">
                <a href="javascript:;" class="item-check-btn" v-bind:class="{'check':item.checked==true}" @click="editCart('checked',item)">
                  <svg class="icon icon-ok">
                    <use xlink:href="#icon-ok"></use>
                  </svg>
                </a>
              </div>
              <div class="cartlist-item-pic"><img v-bind:src="`/static/images/${item.productImg}`" v-bind:alt="item.productName"></div>
              <div class="cartlist-item-title">
                <div class="item-name">{{item.productName}}</div>
              </div>
            </div>
            <div class="cartlist-tab-2">
              <p class="item-price">{{item.productPrice | currency}}</p>
            </div>
            <div class="cartlist-tab-3">
              <button @click="editCart('minus',item)">-</button>
              <span>{{item.productNum}}</span>
              <button @click="editCart('add',item)">+</button>
            </div>
            <div class="cartlist-tab-4">
              <p class="item-suntotal">{{(item.productNum*item.productPrice) | currency}}</p>
            </div>
            <div class="cartlist-tab-5">
              <a href="javascript:;" class="item-edit-btn" @click="delCartOverlay(item)"><svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="cartlist-items-footer">
        <div class="cartlist-items-footer-left">
          <a href="javascript:;" @click="checkAll()">
            <span class="item-check-btn" v-bind:class="{'check':checkAllFlag}"><svg class="icon icon-ok">
              <use xlink:href="#icon-ok"></use>
            </svg></span>
            <span>Select all</span>
          </a>
        </div>
        <div class="cartlist-items-footer-right">
          <div class="cart-total">
            Total:<span class="total-price">{{totalPrice | currency}}</span>
          </div>
          <div class="btn-wrap"><a class="btn" v-bind:disabled="checkedCount==0" @click="checkout">Checkout</a></div>
        </div>
      </div>
    </div>
    <Overlay v-bind:mdShow="overlayConfirm" v-on:close="closeOverlay">
      <p slot="message">确认删除此商品？</p>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn" @click="delCart()">确认</a>
        <a href="javascript:;" class="btn" @click="overlayConfirm = false">关闭</a>
      </div>
    </Overlay>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import './../assets/css/cart.css'
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/Bread'
import Overlay from '@/components/Overlay'
import axios from "axios"
export default {
  data() {
    return {
      cartList:[],
      delItem:{},
      overlayConfirm:false
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Overlay
  },
  computed:{
    checkAllFlag(){
      return this.checkedCount == this.cartList.length
    },
    checkedCount(){
      var i = 0;
      this.cartList.forEach((item)=>{
        if(item.checked == true)i++;
      })
      return i;
    },
    totalPrice(){
      var totalPrice = 0;
      this.cartList.forEach((item)=>{
        if(item.checked == true){
          totalPrice += parseFloat(item.productPrice) * parseInt(item.productNum);
        }
      })
      return totalPrice;
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    //初始化购物车列表
    init(){
      axios.get('/users/cartList').then((response)=>{
        let res = response.data;
        this.cartList = res.result;
      })
    },
    //判断用户所做更改
    editCart(flag, item){
      if(flag == "checked"){
        item.checked = !item.checked;
      }else if (flag == "minus") {
        if(item.productNum > 1){
          item.productNum --;
        }
      }else{
        item.productNum ++;
      }
      axios.post("/users/cart/edit",{
        productId:item.productId,
        productNum:item.productNum,
        productchecked:item.checked
      }).then((response)=>{
        let res = response.data;
        if(res.status == "0"){
          let num = 0;
          if(flag == "add"){
            num = 1;
          }else if (flag == "minus") {
            num = -1;
          }
          this.$store.commit("updatecartCount",num);
        }
      })
    },
    delCartOverlay(item){
      this.delItem = item;
      this.overlayConfirm = true;
    },
    closeOverlay() {
      this.overlayConfirm = false;
    },
    delCart(){
      axios.post("/users/cart/del",{
        productId:this.delItem.productId
      }).then((response)=>{
        let res = response.data;
        if(res.status == "0"){
          this.overlayConfirm = false;
          this.init();    //删除后重新加载购物车列表，这里可以操作this.cartList就不用再发送次请求了
          this.$store.commit("updatecartCount",-this.delItem.productNum);
        }
      })
    },
    checkAll(){
      var flag = !this.checkAllFlag;
      this.cartList.forEach((item)=>{
        item.checked = flag;
      })
      axios.post("/users/cart/checkAll",{
        checkAll:flag
      }).then((response)=>{
        let res = response.data;
        if(res.status == "0"){
          console.log(res.result)
        }
      })
    },
    checkout(){
      if(this.checkedCount > 0){
        this.$router.push({path: "/address"});
      }
    }
  }
}
</script>

<style lang="css" scoped>
.cartpage{
  position: relative;
  min-height: 100vh;
}
</style>
