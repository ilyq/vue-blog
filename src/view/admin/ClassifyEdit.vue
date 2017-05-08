<template>
  <div class="article">
    <h2>分类</h2>
    <div class="article-title">
      <mu-text-field v-model="name" hintText="名称"/><br/>
    </div>
    <div class="button">
      <mu-raised-button label="保存" class="save-button" primary @click.native="updateCategory"/>
    </div>
  </div>
</template>

<script>
  // https://github.com/F-loat/vue-simplemde
  import 'simplemde-theme-base/dist/simplemde-theme-base.min.css'
  import store from '@/store/store'
  import axios from 'axios'
  export default {
    name: 'classify',
    data () {
      return {
        name: '',
        oldName: ''
      }
    },
    methods: {
      updateCategory: function () {
        if (this.oldName) {
          console.log(this.name)
          console.log(this.oldName)
          axios({
            method: 'put',
            url: 'http://epoll.top/api/v1/admin/category?token=' + store.state.access_token,
            responseType: 'json',
            data: {
              new_name: this.name,
              name: this.oldName
            }
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          axios({
            method: 'post',
            url: 'http://epoll.top/api/v1/admin/category?token=' + store.state.access_token,
            responseType: 'json',
            data: {
              name: this.name
            }
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        }
      }
    },
    created: function () {
      let that = this
      let id = this.$route.params.id
      console.log(id)
      axios({
        method: 'get',
        url: 'http://epoll.top/api/v1/index/category/detailed?category_id=' + id,
        responseType: 'json'
      })
      .then(res => {
        console.log(res.data.name)
        that.name = res.data.name
        that.oldName = res.data.name
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style>
  .article {
    padding: 20px;
  }
  .editor {
    width: 100%;
    display: inline-block;
  }
  .button{
    display: flex;
    justify-content: flex-end;
  }
  .save-button {
    margin: 12px;
  }
</style>
