import { mutations } from './mutations'
import { actions } from './actions'

const moduleChat = {
  namespaced: true,
  state: {
    messages: [],
    newMessage: '',
    isScrolled: false
  },
  mutations,
  actions
}

export default moduleChat
