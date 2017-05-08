<template>
  <div class="article">
    <h2>文章列表</h2>
    <div class="delete-div">
      <mu-raised-button label="删除" primary @click.native="deleteArticle"></mu-raised-button>
    </div>
    <div>
      <mu-table @cellClick="cellClick" :multiSelectable="multiSelectable">
        <mu-thead>
          <mu-tr>
            <mu-th>标题</mu-th>
            <mu-th>分类</mu-th>
            <mu-th>创建时间</mu-th>
            <mu-th>更新时间</mu-th>
            <mu-th>操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item in articleData" :key="item.id">
            <mu-td :name="item.id.toString()">{{ item.title }}</mu-td>
            <mu-td :name="item.id.toString()">{{ item.category }}</mu-td>
            <mu-td :name="item.id.toString()">{{ item.created }}</mu-td>
            <mu-td :name="item.id.toString()">{{ item.updated }}</mu-td>
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
  import axios from '@/http/index'
  import store from '@/store/store'
  export default {
    name: 'article',
    data () {
      return {
        articleData: [],
        selectId: 0,
        multiSelectable: false
      }
    },
    created: function () {
      let that = this
      axios({
        method: 'get',
        url: 'http://epoll.top/api/v1/admin/article?token=' + store.state.access_token,
        responseType: 'json'
      })
      .then(function (res) {
        that.articleData = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      cellClick (rowIndex, columnName, td, tr) {
        console.log(columnName)
        if (this.selectId === columnName) {
          this.selectId = 0
        } else {
          this.selectId = columnName
        }
      },
      deleteArticle () {
        console.log(this.selectId)
        if (this.selectId) {
          axios({
            method: 'delete',
            url: 'http://epoll.top/api/v1/admin/article?token=' + store.state.access_token,
            responseType: 'json',
            data: {
              id: this.selectId
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
  .delete-div {
    text-align: right;
  }
</style>
