import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const NOT_IN_BASKET = 0
const IN_BASKET = 1

export const state = {
  items: []
}

export const getters = {
  itemsInBasket: state => state.items.filter(item => item.status === IN_BASKET),
  itemsNotInBasket: state => state.items.filter(item => item.status === NOT_IN_BASKET)
}

export const mutations = {
  addItems (state, items) {
    state.items = state.items.concat(items)
  },
  addItemToBasket (state, itemId) {
    state.items.find(item => item.id === itemId).status = IN_BASKET
  },
  removeItemFromBasket (state, itemId) {
    state.items.find(item => item.id === itemId).status = NOT_IN_BASKET
  }
}
export const actions = {
  async getPost (store) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    store.commit('SET_POST', { userId: response.data.userId })
  },
  fetchItems ({ commit }) {
    commit('addItems', [
      {
        id: 1,
        name: 'Milk',
        status: NOT_IN_BASKET
      },
      {
        id: 2,
        name: 'Bread',
        status: NOT_IN_BASKET
      }
    ])
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})
