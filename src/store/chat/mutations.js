import { SET_MESSAGES, SET_NEW_MESSAGE, ADD_MESSAGE } from './mutation-types'

export const mutations = {
  [SET_NEW_MESSAGE] (state, value) {
    state.newMessage = value
  },
  [SET_MESSAGES] (state, messages) {
    state.messages = messages
  },
  [ADD_MESSAGE] (state, message) {
    state.messages.push(message)
  }
}
