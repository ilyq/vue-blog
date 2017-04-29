<template>
    <div class="index">
        <head-item></head-item>
        <div class="article-div">
          <div v-for="item in items.data">
            <article-content>
              <div class="title" slot="title">{{item.title}}</div>
              <div class="updated" slot="updated">{{item.updated}}</div>
              <div v-html="marked(item.body)" class="article-content" slot="content"></div>
            </article-content>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Article from '@/components/Article'
import Head from '@/view/index/Head'
import 'highlight.js/styles/atom-one-dark.css'
var marked = require('marked')

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

export default {
  name: 'index',
  data () {
    return {
      screenHeight: document.documentElement.clientHeight,
      items: {}
    }
  },
  methods: {
    marked: function (input) {
      return marked(input)
    }
  },
  components: {
    'article-content': Article,
    'head-item': Head
  },
  created: function () {
    let that = this
    axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/api/v1/index/article?page=1&per_page=10',
      responseType: 'json'
    })
    .then(function (res) {
      that.items = res.data
    })
    .catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style>
pre {
  /*background-color: #f7f7f7;*/
  color: #abb2bf;
  background: #282c34;
}

.index {
  max-width: 1170px;
  min-height: 100vh;
  background-color: #fff;
  margin: 0 auto;
}
.article-div {
  box-sizing: border-box;
  max-width: 770px;
  width: 100%;
  padding: 20px 10px 10px;
  margin: 0 auto;
}
.title {
  text-align: center;
  font-size: 2.4rem;
  color: #212121;
  line-height: 1.2;
  border-bottom: 2px solid #fff;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}

.title:hover {
  border-bottom: 2px solid #F9AFAF;
}

.updated {
  font-size: 12px;
  color: #999;
  margin: 5px;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.article-content {
  font-size: 14px;
  color: #555;
  line-height: 2;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
</style>
