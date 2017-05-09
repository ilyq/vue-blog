<template>
    <div class="category">
        <head-item></head-item>
        <div class="category-all-title">
          目前共计 {{total}} 个分类
        </div>
        <div v-for="item in items.data">
            <div class="name" slot="title">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '@/view/index/Head'
import {HOSTNAME} from '@/http/host'

export default {
  name: 'category',
  data () {
    return {
      screenHeight: document.documentElement.clientHeight,
      items: {},
      total: 0
    }
  },
  components: {
    'head-item': Head
  },
  created: function () {
    let that = this
    axios({
      method: 'get',
      url: HOSTNAME + 'v1/index/category?page=1&per_page=10',
      responseType: 'json'
    })
    .then(function (res) {
      // console.log(res)
      that.items = res.data
      that.total = res.data.total
    })
    .catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style>
.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
}
.category-all-title {
  margin-top: 5%;
  text-align: center;
  font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 14px;
  line-height: 2;
  color: #555;
}
.name {
  font-size: 2.4rem;
  color: #212121;
  line-height: 1.2;
  border-bottom: 2px solid #fff;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.name:hover {
  border-bottom: 2px solid #F9AFAF;
}
</style>
