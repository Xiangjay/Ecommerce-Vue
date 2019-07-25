<template>
  <div class="productspage">
    <nav-header></nav-header>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-arrow-short" viewBox="0 0 25 32">
          <title>arrow-short</title>
          <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
        </symbol>
        <symbol id="icon-status-ok" viewBox="0 0 32 32">
          <title>status-ok</title>
          <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
          <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
        </symbol>
      </defs>
    </svg>
    <nav-bread>
      <li>产品列表</li>
    </nav-bread>
    <div class="products">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-arrow-short" viewBox="0 0 25 32">
            <title>arrow-short</title>
            <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
          </symbol>
        </defs>
      </svg>
      <div class="filter">
        <span>Sort by: </span>
        <ul>
          <li><a href="javascript:void(0)" @click="sortbyPrice()">Price<svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a></li>
          <li><a href="javascript:void(0)">Popular<svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a></li>
        </ul>
      </div>
      <div class="products-list">
        <div class="nav-left">
          <ul>
            <span>Price:</span>
            <li><a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'priceChecked':priceChecked=='all'}">All</a></li>
            <li v-for="(price,index) in priceFilter">
              <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'priceChecked':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
            </li>
          </ul>
        </div>
        <div class="nav-right">
          <div class="col-4-1" v-for="item of productsList">
            <div class="card-image">
              <a href=""><img v-bind:src="`/static/images/${item.productImg}`" alt=""></a>
            </div>
            <div class="card-content">
              <p class="card-title">{{item.productName}}</p>
              <p class="card-price">{{item.productPrice}}</p>
              <a href="javascript:;" class="btn" @click="addCart(item.productId)">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="loading-icon">
        <img v-show="loading" src="/static/loading-svg/loading-spinning-bubbles.svg" alt="">
      </div>
    </div>
    <Overlay v-bind:mdShow="mdShow" v-on:close="closeOverlay()">
      <p slot="message">请先登录再加入到购物车</p>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn" @click="closeOverlay()">关闭</a>
      </div>
    </Overlay>
    <Overlay v-bind:mdShow="mdShowCart" v-on:close="closeOverlay()">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成功!</span>
      </p>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn" @click="closeOverlay()">继续购物</a>
        <router-link class="btn" to="/cart">查看购物车</router-link>
      </div>
    </Overlay>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import './../assets/css/products.css'
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import NavBread from '@/components/Bread'
import Overlay from '@/components/Overlay'
import axios from "axios"
export default {
  data(){
    return{
      productsList: [],
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '500.00',
        },
        {
          startPrice: '500.00',
          endPrice: '1000.00',
        },
        {
          startPrice: '1000.00',
          endPrice: '2000.00',
        },
        {
          startPrice: '2000.00',
          endPrice: '4000.00',
        },
        {
          startPrice: '4000.00',
          endPrice: '6000.00',
        },
        {
          startPrice: '6000.00',
          endPrice: '8000.00',
        },
        {
          startPrice: '8000.00',
          endPrice: '10000.00',
        }
      ],
      sortFlag: true,
      priceGte: 0,
      priceLte: 0,
      page: 1,
      pageSize: 4,
      priceChecked: 'all',
      busy: true,    //控制滚动插件
      loading: true,   //控制加载动画
      mdShow: false,
      mdShowCart: false //登录后的overlay
    }
  },
  components:{
    NavHeader: NavHeader,
    NavFooter: NavFooter,
    NavBread: NavBread,
    Overlay: Overlay
  },
  mounted(){
    this.getProductsList();
  },
  methods:{
    //得到商品数据列表
    getProductsList(){
      //判断是否进行了价格区间筛选
      if(this.priceChecked == "all"){
        var params = {
          page:this.page,
          pageSize:this.pageSize,
          sort:this.sortFlag ? 1 : -1
        }
      }else{
        var params = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag ? 1 : -1,
          priceGte: this.priceGte,
          priceLte: this.priceLte
        }
      }
      axios.get("/products/getlist",{
        params:params
      }).then((response)=>{
        let res = response.data;
        this.loading = false;
        if(res.status == "0"){
          this.productsList = this.productsList.concat(res.result.list);
          if(res.result.count < this.pageSize){ //如果数据不够了就停止滚动方法
            this.busy = true;
          }else{
            this.busy = false;
          }
        }else{
          console.log(res.msg);
          this.productsList = [];
        }
      })
    },
    //价格区间筛选
    setPriceFilter(index){
      if(index == "all"){
        this.priceChecked = 'all'
        this.page = 1;
        this.productsList = [];
        this.getProductsList();
      }else{
        this.priceChecked = index;
        this.page = 1;
        this.productsList = [];
        this.priceGte = this.priceFilter[index].startPrice;
        this.priceLte = this.priceFilter[index].endPrice;
        this.getProductsList();
      }
    },
    //按价格排序
    sortbyPrice(){
      this.productsList.reverse();
    },
    //鼠标滚动继续加载数据
    loadMore(){
      this.loading = true;
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getProductsList();
      }, 500);
    },
    //加入购物车
    addCart(productId){
      axios.post("/products/addCart",{
        productId:productId
      }).then((response)=>{
        let res = response.data;
        if(res.status == "0"){
          if(this.$store.state.nickName){
            this.mdShowCart = true;
            this.$store.commit("updatecartCount",1)
          }else{
            this.mdShow = true;
          }
        }
      })
    },
    closeOverlay() {
      this.mdShow = false;
      this.mdShowCart = false;
    }
  }
}
</script>

<style lang="css" scoped>
.loading-icon{
  text-align: center;
  padding-top: 20px;
}
</style>
