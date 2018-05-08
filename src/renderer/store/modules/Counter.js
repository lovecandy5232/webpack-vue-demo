const state = {
  main: 0,
  movie:''
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  SETMOVIE(state,data){
    state.movie = data
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  setMovie({commit},data){
    commit("SETMOVIE",data)
  }
}

export default {
  state,
  mutations,
  actions
}
