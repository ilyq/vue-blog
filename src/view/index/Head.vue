<template>
<div class="header">
  <span class="brand">ilyq</span>
  <div class="menu">
    <div class="item">
      <router-link :to="{name: 'Index'}">首页</router-link>
    </div>
    <div class="item">
      <router-link :to="{name: 'Category'}">分类</router-link>
    </div>
    <div class="item">
      <router-link :to="{name: 'About'}">关于</router-link>
    </div>
  </div>
</div>
</template>

<style>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.brand {
  color: #fff;
  background: #222;
  padding: 8px 40px;
  font-size: 32px;
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
  padding: 10px;
}

.item a {
  color: #000;
}

.item:hover {
  padding: 10px;
  background-color: #B8B8B8;
}
</style>
