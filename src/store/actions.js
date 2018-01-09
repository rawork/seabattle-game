import { SET_STATUS, SET_TIMER, SET_START_TIME, SET_DURATION, SET_ERROR, SET_TEAMS, SET_FIELD, SET_CURRENT } from './mutation-types'
import battle from '../api/battle'

let timerInterval
let timerShotInterval
let timerCurrent
let curTime

export const actions = {
  initGame ({ dispatch, commit, state }) {
    battle.getData(
      response => {
        if (response.data.error) {
          commit(SET_ERROR, response.data.error)
          return
        }
        // commit(SET_START_TIME, Math.ceil(new Date().getTime() / 1000))
        commit(SET_START_TIME, response.data.timer.start - 3600 * 3)
        commit(SET_DURATION, response.data.timer.duration)
        commit(SET_TEAMS, response.data.teams)
        commit(SET_FIELD, response.data.field)
        timerCurrent = setInterval(function () {
          curTime = new Date().getTime()
          if (curTime >= state.startTime) {
            clearInterval(timerCurrent)
          } else {
            commit(SET_CURRENT, curTime)
          }
        }, 1000)
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
  shoot ({ commit, state }) {

  },
  setShooter ({ commit, state }) {
    timerShotInterval = setInterval(function () {
      const startTime = state.shotStartTime
      const stopTime = state.startTime + (state.shotDuration)
      const currentTime = Math.ceil(new Date().getTime() / 1000)

      if (currentTime >= stopTime) {
        clearInterval(timerShotInterval)
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
  socket_messageChannel: (context, message) => {
    context.commit('SOCKET_MESSAGE_CHANNEL', message)
  },
  socket_newMessage: (context, message) => {
    context.commit('SOCKET_NEW_MESSAGE', message)
  }
  // ,
  // socket_connect: (context) => {
  //   context.commit('SOCKET_CONNECT')
  // },
  // socket_disconnect: (context) => {
  //   context.commit('SOCKET_DISCONNECT')
  // }
}
