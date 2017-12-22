import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import task from '../api/task'
import {IMPORT_CHESTS, SET_STATUS, SET_TIMER, SET_ANSWER, SET_START_TIME, SET_DURATION, SET_ERROR} from './mutation-types'

Vue.use(Vuex)

let timerInterval

const store = new Vuex.Store({
  state: {
    isConnected: false,
    status: 'init',
    error: '',
    timer: {},
    startTime: 0,
    duration: 0,

  },
  mutations,
  actions: {
    initTask ({ commit, state }) {
      task.getData(
        response => {
          if (response.data.error) {
            commit(SET_ERROR, response.data.error)
            return
          }
          commit(SET_START_TIME, new Date().getTime() / 1000) // response.data.startTime
          commit(IMPORT_CHESTS, response.data.chests)
          commit(SET_DURATION, response.data.duration)
          commit(SET_ANSWER, response.data.answer)

          timerInterval = setInterval(function () {
            const startTime = state.startTime
            const stopTime = state.startTime + (state.duration * 60)
            const currentTime = Math.ceil(new Date().getTime() / 1000)

            if (currentTime >= stopTime) {
              clearInterval(timerInterval)
              commit(SET_STATUS, 'after')
            } else if (currentTime < startTime) {
              commit(SET_STATUS, 'before')
            } else {
              let timerSeconds = stopTime - currentTime
              let timerMinutes = Math.floor(timerSeconds / 60)
              timerSeconds = Math.ceil(timerSeconds - timerMinutes * 60)
              commit(SET_TIMER, {minutes: timerMinutes, seconds: timerSeconds})
              if (state.status !== 'error') {
                commit(SET_STATUS, 'game')
              }
            }
          }, 1000)
        },
        error => {
          console.log(error)
          commit(SET_ERROR, 'Ошибка инициализации игры, обратитесь к администатору')
        }
      )
    },
    saveAnswer ({commit, state}) {
      if (state.answer === null) {
        alert('Выберите вариант ответа')
        return
      }
      task.setData(
        state.answer,
        response => {
          if (response.data.error) {
            commit(SET_ERROR, response.data.error)
            return
          }
          commit(SET_ANSWER, response.value)
          commit(SET_TIMER, {})
          clearInterval(window.timerInterval)
        },
        error => {
          clearInterval(window.timerInterval)
          console.log(error)
          commit(SET_ERROR, 'Ошибка сохранения игры, обратитесь к администатору')
        }
      )
    }
  }
})

export default store
