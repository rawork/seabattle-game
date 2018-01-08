import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import moduleChat from './chat'
import moduleQuestion from './question'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status: 'init', // init, game, before, after, error
    error: '',
    timer: {},
    isShooter: false,
    startTime: 0,
    duration: 0,
    user: null,
    shooter: 0,
    shooter_timer: 0,
    battle: 0,
    teams: [],
    field: [],
    timerShot: 20,
    shotDuration: 30,
    isConnected: false,
    socketMessage: '',
    currentTime: 0
  },
  mutations,
  actions,
  modules: {
    chat: moduleChat,
    question: moduleQuestion
  }
})

export default store
