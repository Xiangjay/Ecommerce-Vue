// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'Vuex'
import VueLazyLoad from 'vue-lazyload'    //图片懒加载插件
import infiniteScroll from 'vue-infinite-scroll'   //分页插件
import {currency} from './assets/js/currency'  //金额格式化过滤器

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"
})
Vue.use(infiniteScroll)

Vue.config.productionTip = false

Vue.filter("currency",currency) //定义全局过滤器

/*定义vuex对象*/
const store = new Vuex.Store({
  state:{
    userId: '',
    nickName:'',
    cartCount:0
  },
  mutations:{
    updateuserId(state,userId){
      state.userId = userId;
    },
    updatenickName(state,nickName){
      state.nickName = nickName;
    },
    initcartCount(state,cartCount){
      state.cartCount = cartCount;
    },
    updatecartCount(state,cartCount){
      state.cartCount += cartCount;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
