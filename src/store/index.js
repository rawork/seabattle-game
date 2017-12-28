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

    isShooter: true,
    startTime: 0,
    duration: 0,
    user: 450,
    shooter: 450,
    battle: 1,
    teams: [
      {id: 1, shooter_id: 1, color: 'red', num: 1, dead: 3, alive: 3, name: 'Team1', flag: '/static/img/flag/flag1.png'},
      {id: 2, shooter_id: 2, color: 'green', num: 2, dead: 2, alive: 4, name: 'Team2', flag: '/static/img/flag/flag2.png'},
      {id: 3, shooter_id: 3, color: 'brown', num: 3, dead: 6, alive: 0, name: 'Team3', flag: '/static/img/flag/flag3.png'}
    ],
    field: [],
    timerShot: 20,
    shotDuration: 30,
    isConnected: false,
    socketMessage: ''
  },
  mutations,
  actions,
  modules: {
    chat: moduleChat,
    question: moduleQuestion
  }
})

export default store
