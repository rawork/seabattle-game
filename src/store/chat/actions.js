import { SET_MESSAGES, SET_NEW_MESSAGE } from './mutation-types'
import { SET_ERROR } from '../mutation-types'
import battle from '../../api/battle'

export const actions = {
  getMessages ({ commit }) {
    battle.getMessages(
      response => {
        if (response.data.error) {
          commit(SET_ERROR, response.data.error, {root: true})
          return
        }
        commit(SET_MESSAGES, response.data.messages)
      },
      error => {
        console.log(error)
        // commit(SET_ERROR, 'Ошибка получения сообщений чата, обратитесь к администатору', {root: true})
      }
    )
  },
  addMessage ({ commit }, message) {
    battle.addMessage(
      message,
      response => {
        if (response.data.error) {
          commit(SET_ERROR, response.data.error, {root: true})
          return
        }
        commit(SET_NEW_MESSAGE, '')
      },
      error => {
        console.log(error)
        // commit(SET_ERROR, 'Ошибка сохранения сообщения в чате, обратитесь к администатору', {root: true})
      }
    )
  }
}
