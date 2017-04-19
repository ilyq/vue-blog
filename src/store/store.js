import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: null
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.access_token = data
      state.access_token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('access_token')
      state.access_token = null
    }
  }
})
