import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 10
}

const mutations = {
  increment (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations
})
