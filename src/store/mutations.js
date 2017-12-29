import { SET_STATUS, SET_TIMER, SET_START_TIME, SET_DURATION, SET_ERROR } from './mutation-types'

export const mutations = {
  [SET_STATUS] (state, status) {
    state.status = status
  },
  [SET_TIMER] (state, timer) {
    state.timer = timer
  },
  [SET_START_TIME] (state, startTime) {
    state.startTime = startTime
  },
  [SET_DURATION] (state, duration) {
    state.duration = duration
  },
  [SET_ERROR] (state, error) {
    state.error = error
    state.status = 'error'
  },
  SOCKET_CONNECT (state) {
    state.isConnected = true
  },
  SOCKET_DISCONNECT (state) {
    state.isConnected = false
  },
  SOCKET_MESSAGE_CHANNEL (state, message) {
    state.socketMessage = message
  },
  SOCKET_NEW_MESSAGE (state, message) {
    const newId = state.chat.messages.length + 1
    state.chat.messages.push({id: newId, name: 'name' + Math.floor(Math.random() * (10 - 1)) + 1, fullname: 'fullname1', message: message})
    state.chat.newMessage = ''
  }
}
