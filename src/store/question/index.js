import { mutations } from './mutations'
import { actions } from './actions'

const moduleQuestion = {
  namespaced: true,
  state: {
    question: {},
    timer: 0,
    startTime: 0,
    duration: 25,
    answer: null
  },
  mutations,
  actions
}

export default moduleQuestion
