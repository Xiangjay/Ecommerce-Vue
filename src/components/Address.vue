<template>
<div>
  <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="icon-add" viewBox="0 0 32 32">
        <title>add2</title>
        <path class="path1"
          d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z">
        </path>
      </symbol>
      <symbol id="icon-del" viewBox="0 0 32 32">
        <title>delete</title>
        <path class="path1"
          d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z">
        </path>
        <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
      </symbol>
    </defs>
  </svg>
  <Nav-Header></Nav-Header>
  <Nav-Bread>
    <li>地址列表</li>
  </Nav-Bread>
  <div class="addresslist">
    <div class="check-step">
      <ul>
        <li class="select">Confirm address</li>
        <li>View your order</li>
        <li>Make payment</li>
        <li>Order confirmation</li>
      </ul>
    </div>
    <h2>Shipping address</h2>
    <div class="address-list-wrap">
      <div class="address-list">
        <ul>
          <li v-for="(item,index) in addressList" v-bind:class="{'select': selectedindex == index}" @click="selectedindex = index">
            <p class="address-mail-name">{{item.userName}}</p>
            <p class="address-mail-address">{{item.streetName}}</p>
            <p class="address-mail-tel">{{item.tel}}</p>
            <div class="address-setdefault" v-if="!item.isDefault">
              <a href="javascript:;" @click="setDefault(item.addressId)">Set default</a>
            </div>
            <div class="address-setdefault" v-if="item.isDefault">
              Default address
            </div>
            <div class="address-del">
              <a href="javascript:;" class="address-del-btn" @click="del()">
                <svg class="icon icon-del">
                  <use xlink:href="#icon-del"></use>
                </svg>
              </a>
            </div>
          </li>
          <li class="address-new" @click="newaddress()">
            <div class="address-new-content">
              <svg class="icon icon-add">
                <use xlink:href="#icon-add"></use>
              </svg>
              <p>Add new address</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="next-btn-wrap">
      <a href="javascript:;" class="btn" @click="gonext()">Next</a>
      <!-- <router-link class="btn btn--m btn--red" :to="{path:'orderConfirm',query:{'addressId':selectedAddressId}}">Next</router-link> -->
    </div>
  </div>
  <Nav-Footer></Nav-Footer>
</div>
</template>

<script>
import './../assets/css/address.css'
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/Bread'
import Overlay from '@/components/Overlay'
import axios from "axios"
export default {
  data() {
    return {
      addressList: [],
      selectedAddressId:'',
      selectedindex:0
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Overlay
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/users/addressList").then((response) => {
        let res = response.data;
        if (res.status == "0") {
          this.addressList = res.result;
        }
      })
    },
    setDefault(addressId) {
      axios.post("/users//addressList/setDefault", {
        addressId: addressId
      }).then((response) => {
        let res = response.data;
        if(res.status == "0"){
          this.init();
        }
      })
    },
    del(){
      alert("跟购物车删除差不多，这里就不做了");
    },
    newaddress(){
      alert("这里先不做了");
    },
    gonext(){
      this.selectedAddressId = this.addressList[this.selectedindex].addressId;
      console.log(this.selectedAddressId)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
