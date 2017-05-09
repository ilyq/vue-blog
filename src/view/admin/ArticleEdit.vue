<template>
  <div class="article">
    <h2>文章</h2>
    <div class="article-title">
      <mu-text-field v-model="title" hintText="文章标题"/><br/>
    </div>
    <h4>文章分类</h4>
    <div class="article-category">
      <mu-select-field v-model="categoryname" :labelFocusClass="['label-foucs']" label="选择分类">
        <mu-menu-item v-for="item in category.data" :key="item.id" :value="item.name" :title="item.name" />
      </mu-select-field>
    </div>
    <h4>文章内容</h4>
    <div class="editor">
      <markdown-editor v-model="content" ref="markdownEditor" :custom-theme="true" :configs="configs"></markdown-editor>
    </div>
    <div class="button">
      <mu-raised-button label="保存" class="save-button" primary @click.native="saveArticle"/>
    </div>
  </div>
</template>

<script>
  // https://github.com/F-loat/vue-simplemde
  import 'simplemde-theme-base/dist/simplemde-theme-base.min.css'
  import store from '@/store/store'
  import { markdownEditor } from 'vue-simplemde'
  import axios from 'axios'
  import {HOSTNAME} from '@/http/host'
  export default {
    name: 'article',
    data () {
      return {
        articleid: '',
        title: '',
        content: '',
        category: [],
        categoryname: '',
        configs: {
          spellChecker: false,
          indentWithTabs: false,
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-dark'
          }
        }
      }
    },
    components: {
      markdownEditor
    },
    computed: {
      simplemde () {
        return this.$refs.markdownEditor.value
      }
    },
    methods: {
      saveArticle: function () {
        if (this.articleid) {
          // 更新
          axios({
            method: 'put',
            url: HOSTNAME + 'v1/admin/article?token=' + store.state.access_token,
            responseType: 'json',
            data: {
              id: this.articleid,
              title: this.title,
              body: this.content,
              category: this.categoryname
            }
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          // 创建
          axios({
            method: 'post',
            url: HOSTNAME + 'v1/admin/article?token=' + store.state.access_token,
            responseType: 'json',
            data: {
              title: this.title,
              body: this.content,
              category: this.categoryname
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
      that.articleid = id
      axios({
        method: 'get',
        url: HOSTNAME + 'v1/admin/category?token=' + store.state.access_token,
        responseType: 'json'
      })
      .then(res => {
        that.category = res.data
      })
      .catch(err => {
        console.log(err)
      })
      if (id) {
        axios({
          method: 'get',
          url: HOSTNAME + 'v1/index/article/info?article_id=' + id,
          responseType: 'json'
        })
        .then(res => {
          console.log(res)
          that.title = res.data.title
          that.content = res.data.body
          that.categoryname = res.data.category
        })
        .catch(err => {
          console.log(err)
        })
      }
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
