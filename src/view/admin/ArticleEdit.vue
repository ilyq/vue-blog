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
  export default {
    name: 'article',
    data () {
      return {
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
        console.log(this.title)
        console.log(this.content)
        console.log(this.categoryname)
        axios({
          method: 'post',
          url: 'http://127.0.0.1:5000/api/v1/admin/article?token=' + store.state.access_token,
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
    },
    created: function () {
      let that = this
      let id = this.$route.params.id
      console.log(id)
      axios({
        method: 'get',
        url: 'http://127.0.0.1:5000/api/v1/admin/category?token=' + store.state.access_token,
        responseType: 'json'
      })
      .then(res => {
        console.log(res)
        that.category = res.data
        console.log(that.category)
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
