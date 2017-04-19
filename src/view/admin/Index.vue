<template>
    <div class="index" v-bind:style="{height: clientHeight}">
        <div class="header">
          <span class="brand">ilyq</span>
          <div class="menu">
            <div class="item">首页</div>
            <div class="item">归档</div>
            <div class="item">标签</div>
          </div>
        </div>
        <div class="content">
          <article-content></article-content>
        </div>
    </div>
</template>

<script>
import Article from '@/components/Article'
export default {
  name: 'index',
  data: {
    screenHeight: document.body.clientHeight
  },
  components: {
    'article-content': Article
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
</style>
