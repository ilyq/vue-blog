<template>
    <div class="index" v-bind:style="{height: screenHeight}">
        <div class="header">
          <span class="brand">ilyq</span>
          <div class="menu">
            <div class="item">首页</div>
            <div class="item">归档</div>
            <div class="item">标签</div>
          </div>
        </div>
        <div v-for="item in items">
          <article-content>
            <div class="title" slot="title">{{item.custom_title}}</div>
            <div class="updated" slot="updated">{{item.article_id}}</div>
            <div class="article-content" slot="content">{{item.picture}}</div>
          </article-content>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Article from '@/components/Article'
export default {
  name: 'index',
  data () {
    return {
      screenHeight: document.documentElement.clientHeight,
      items: []
    }
  },
  components: {
    'article-content': Article
  },
  created: function () {
    let that = this
    axios({
      method: 'get',
      url: 'https://api.gzxunzhi.cn/v1/guokr/flowingboard/item/handpick_carousel',
      responseType: 'json'
    })
    .then(function (res) {
      that.items = res.data.result
    })
    .catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.brand {
  color: #fff;
  background: #222;
  padding: 0 40px;
  font-size: 24px;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  display: inline-block;
  line-height: 36px;
  margin-top: 15px;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
}
.item {
  margin: 10px;
}
.title {
  font-size: 26px;
  font-weight: 400;
  color: #555;
  line-height: 1.2;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.updated {
  font-size: 12px;
  color: #999;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.article-content {
  font-size: 14px;
  color: #555;
  line-height: 2;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
</style>
