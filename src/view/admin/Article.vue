<template>
  <div class="article">
    <h2>文章列表</h2>
    <div>
      <mu-table>
        <mu-thead>
          <mu-tr>
            <mu-th>标题</mu-th>
            <mu-th>分类</mu-th>
            <mu-th>创建时间</mu-th>
            <mu-th>更新时间</mu-th>
            <mu-th>操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody v-for="item in articleData" :key="item.id">
          <mu-tr>
            <mu-td>{{ item.title }}</mu-td>
            <mu-td>{{ item.category }}</mu-td>
            <mu-td>{{ item.created }}</mu-td>
            <mu-td>{{ item.updated }}</mu-td>
            <mu-td>
              <router-link :to="{name: 'ArticleEditUpdate', params:{id: item.id}}">
                <mu-raised-button label="编辑" primary></mu-raised-button>
              </router-link>
            </mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
    <div class="button">
      <router-link to="/article/edit">
        <mu-raised-button label="新增" primary>
        </mu-raised-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store/store'
  export default {
    name: 'article',
    data () {
      return {
        articleData: []
      }
    },
    created: function () {
      let that = this
      axios({
        method: 'get',
        url: 'http://127.0.0.1:5000/api/v1/admin/article?token=' + store.state.access_token,
        responseType: 'json'
      })
      .then(function (res) {
        console.log(res)
        that.articleData = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<style>
  .article {
    padding: 20px;
  }
  .button {
    margin-top: 20px;
  }
</style>
