<template>
  <div class="login">
    <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
      {{errMsg}}
    </mu-popup>
    <mu-text-field v-model="username" label="用户名" hintText="请输入用户名" labelFloat/><br/>
    <mu-text-field v-model="password" label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
    <mu-raised-button label="登录" class="demo-raised-button" primary @click.native="login_fun"/>
  </div>
</template>

<script>
  import * as types from '@/store/types'
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        errMsg: '登录失败',
        topPopup: false,
        username: '',
        password: ''
      }
    },
    watch: {
      topPopup (val) {
        if (val) {
          setTimeout(() => {
            this.topPopup = false
          }, 2000)
        }
      }
    },
    methods: {
      open: function () {
        this.topPopup = true
      },
      login_fun: function () {
        if (this.username || this.password) {
          axios.post('http://127.0.0.1:5000/api/v1/user/login', {
            username: this.username,
            password: this.password
          })
            .then(response => {
              console.log(response)
              if (response.data.token) {
                this.$store.commit(types.LOGIN, response.data.token)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/admin')
                this.$router.push({
                  path: redirect
                })
              } else {
                this.errMsg = response.data.errmsg
                this.open()
              }
            })
            .catch(error => {
              console.log(error)
              this.open()
            })
        }
      }
    }
  }
</script>

<style>
  .login {
    margin: 20px;
  }
  .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }
</style>
