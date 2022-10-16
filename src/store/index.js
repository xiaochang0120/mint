import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 创建一个新的 store 实例
const store = createStore({
  plugins: [
    createPersistedState({
      reducer(state) {
        return {
          detail: state.detail,
          foodDetail: state.foodDetail
        }
      }
    })
  ],
  state() {
    return {
      count: 0,
      dynamicID: 0,
      //lcl
      flag: '全部',
      detail: '',
      foodDetail: ''
    }
  },
  mutations: {
    increment(state, payload) {
      state.count = payload
    },
    getID(state, payload) {
      state.dynamicID = payload
    },
    setFlag(state, payload) {
      state.flag = payload
    },
    setDetail(state, payload) {
      // console.log(payload)
      state.detail = payload
    },
    setFoodDetail(state, payload) {
      state.foodDetail = payload
    }
  }
})

export default store
