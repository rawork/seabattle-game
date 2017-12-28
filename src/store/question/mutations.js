import { SET_QUESTION, SET_ANSWER, SET_TIMER, SET_START_TIME } from './mutation-types'

export const mutations = {
  [SET_QUESTION] (state, question) {
    state.question = question
  },
  [SET_ANSWER] (state, num) {
    state.answer = num
  },
  [SET_TIMER] (state, value) {
    state.timer = value
  },
  [SET_START_TIME] (state, startTime) {
    state.startTime = startTime
  }
}
