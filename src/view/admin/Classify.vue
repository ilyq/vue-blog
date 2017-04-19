<template>
  <div>
    <h2>分类</h2>
    <div>
      <mu-table>
        <mu-thead>
          <mu-tr>
            <mu-th>名称</mu-th>
            <mu-th>创建时间</mu-th>
            <mu-th>更新时间</mu-th>
            <mu-th>操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody v-for="item in items" :key="item.id">
          <mu-tr>
            <mu-td>{{ item.name }}</mu-td>
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
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store/store'
  export default {
    name: 'classify',
    data () {
      return {
        items: []
      }
    },
    created: function () {
      let that = this
      axios({
        method: 'get',
        url: 'http://127.0.0.1:5000/api/v1/admin/category?token=' + store.state.access_token,
        responseType: 'json'
      })
      .then(function (res) {
        console.log(res)
        that.items = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
</script>
