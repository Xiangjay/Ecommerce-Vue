<template>
<div>
  <nav-header></nav-header>
  <div class="loginModule">
      <div class="login" v-if="loginFlag">
        <form action="">
          <h3>请登录</h3>
          <span class="error error-show" v-show="errorTip">用户名或者密码错误</span>
          <input type="email" v-model="userName" placeholder="Email">
          <input type="password" v-model="userPwd" placeholder="Password" @keyup.enter="login">
          <input type="button" value="登录" @click="login">
        </form>
        <ul>
          <li><a href="javascript:;" @click="signupShow">注册</a></li>
          <li><a href="javascript:;">忘记密码</a></li>
        </ul>
      </div>
      <div class="signup" v-if="signupFlag">
        <form action="">
          <h3>请注册</h3>
          <span v-if="signupCheckFlag" class="errmsg">Please check everything</span>
          <span class="errmsg" v-if="userEmailCheck" v-bind:class="{'emailAvaiable':emailAvaiable}">{{emailTips}}</span>
          <input type="email" v-model="userEmail" placeholder="Please enter your email" @blur="checkUsername">
          <input type="text" v-model="newuserName" placeholder="Please enter your username">
          <input type="password" v-model="newuserPwd1" placeholder="Please enter the password (at least six characters)">
          <input type="password" v-model="newuserPwd2" placeholder="Please re-enter the password">
          <input type="button" value="注册" @click="signup">
        </form>
        <ul>
          <li><a href="javascript:;" @click="loginShow">登录</a></li>
        </ul>
      </div>
  </div>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import './../assets/css/home.css'
import axios from "axios"
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'

export default {
  data() {
    return {
      userName: '',
      userPwd: '',
      userEmail: '',
      newuserName: '',
      newuserPwd1: '',
      newuserPwd2: '',
      userEmailCheck: false,
      emailAvaiable: false,
      errorTip: false,
      loginModalFlag: false,
      loginFlag: true,
      signupFlag: false,
      emailTips: '',
      signupCheck: false,
      signupCheckFlag: false,
    }
  },
  components: {
    NavHeader: NavHeader,
    NavFooter: NavFooter
  },
  computed:{
    nickName(){
      return this.$store.state.nickName;
    },
    cartCount(){
      return this.$store.state.cartCount;
    }
  },
  mounted() {
    this.checklogin();
  },
  methods: {
    //判断是否登录
    checklogin() {
      axios.get('/users/checklogin').then((response)=>{
        let res = response.data;
        if(res.status == 0){
          this.$store.commit("updatenickName",res.result);
          this.getCartCount();
          this.$router.push('/products')
        }
      })
    },
    //判断用户名是否可用
    checkUsername() {
      if (this.userEmail == '') { //应该判断email格式，这里就简单判断下是否为空
        this.userEmailCheck = true;
        this.emailTips = "Please input email address correctly"
        this.signupCheck = false;
        this.signupCheckFlag = false;
      } else {
        axios.get('/users/checkUsername', {
          params: {
            userEmail: this.userEmail
          }
        }).then((response) => {
          var res = response.data;
          if (res.result) {
            this.userEmailCheck = true;
            this.emailTips = "This email has already been used, please choose another one";
            this.signupCheck = false;
            this.signupCheckFlag = false;
          } else {
            this.userEmailCheck = true;
            this.emailTips = "Email address avaiable";
            this.emailAvaiable = true;
            this.signupCheck = true;
            this.signupCheckFlag = false;
          }
        })
      }
    },
    //用户登录
    login() {
      if(!this.userName || !this.userPwd){
        this.errorTip = true;
        return;
      }else{
        axios.post('users/login',{
          userEmail: this.userName,
          userPwd: this.userPwd
        }).then((response)=>{
          let res = response.data;
          if(res.status == "0"){
            this.$router.push('/products')
            this.$store.commit("updatenickName",res.result.userName);
            this.getCartCount();
          }else{
            this.errorTip = true;
          }
        })
      }
    },
    //初始化购物车数量
    getCartCount(){
      axios.get("users/getCartCount",{
        params:{
          userEmail:this.userEmail
        }
      }).then((response)=>{
        let res = response.data;
        if(res.status == "0"){
          this.$store.commit("initcartCount",res.result);
        }
      })
    },
    //注册
    signup() {
      if (this.newuserPwd1.length < 6 || this.newuserPwd1 != this.newuserPwd2 || this.newuserName == '' || !this.signupCheck) {
        this.signupCheckFlag = true;
        this.userEmailCheck = false;
        return
      } else {
        axios.post('/users/signup', {
          userEmail: this.userEmail,
          userName: this.newuserName,
          userPwd: this.newuserPwd1
        }).then((response) => {
          let res = response.data;
          if (res.status == "0") {
            this.$store.commit("updatenickName",res.result.userName);
            this.getCartCount();
            this.$router.push('/products')
          } else {
            alert("Signup failed");
          }
        })
      }
    },
    signupShow() {
      this.loginFlag = false;
      this.signupFlag = true;
    },
    loginShow() {
      this.loginFlag = true;
      this.signupFlag = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
