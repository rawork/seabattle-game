import { SET_QUESTION, SET_TIMER, SET_START_TIME } from './mutation-types'
import { SET_ERROR } from '../mutation-types'
import battle from '../../api/battle'

let questionInterval

export const actions = {
  getQuestion ({ commit, state }) {
    battle.getQuestion(
      response => {
        if (response.data.error) {
          commit(SET_ERROR, response.data.error, {root: true})
          return
        }
        commit(SET_START_TIME, Math.ceil(new Date().getTime() / 1000))
        commit(SET_QUESTION, response.data.question)

        questionInterval = setInterval(function () {
          const stopTime = state.startTime + (state.duration)
          const currentTime = Math.ceil(new Date().getTime() / 1000)

          if (currentTime >= stopTime) {
            clearInterval(questionInterval)
            commit(SET_QUESTION, {})
            commit(SET_TIMER, 0)
          } else {
            const timerSeconds = stopTime - currentTime
            commit(SET_TIMER, timerSeconds)
          }
        }, 1000)
      },
      error => {
        console.log(error)
        // commit(SET_ERROR, 'Ошибка получения вопроса, обратитесь к администатору', {root: true})
      }
    )
  },
  sendAnswer ({ commit, state }) {
    clearInterval(questionInterval)
    battle.sendAnswer(
      response => {
        if (response.data.error) {
          commit(SET_ERROR, response.data.error, {root: true})
          return
        }
        // todo что-то надо сделать с отправленным ответом
        // если все ок, то надо получить деньги и статус ячейки

        // если нет то
        commit(SET_TIMER, 0)
      },
      error => {
        console.log(error)
        // commit(SET_ERROR, 'Ошибка отправки ответа, обратитесь к администатору', {root: true})
      }
    )
  }
}
