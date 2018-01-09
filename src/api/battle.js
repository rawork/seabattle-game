import axios from 'axios'

// const apiUrl = '/static/test.json'
// const apiChatMessages = '/static/messages.json'

const apiUrl = '/api/battle/data'
const apiChatMessages = '/api/battle/messages'
const apiChatMessage = '/api/battle/message'
const apiQuestion = '/api/battle/question'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const battle = {
  getData: function (successHandler, failureHandler) {
    axios.get(apiUrl + '?_=' + new Date().getTime())
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  getQuestion: function (successHandler, failureHandler) {
    axios.get(apiQuestion + '?_=' + new Date().getTime())
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  setAnswer: function (value, successHandler, failureHandler) {
    axios.post(apiUrl, {answer: value})
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  setShooter: function (value, successHandler, failureHandler) {
    axios.post(apiUrl, {answer: value})
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  setMoney: function (value, successHandler, failureHandler) {
    axios.post(apiUrl, {answer: value})
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  getMessages: function (successHandler, failureHandler) {
    axios.get(apiChatMessages + '?_=' + new Date().getTime())
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  addMessage: function (value, successHandler, failureHandler) {
    console.log(apiChatMessage, value)
    axios.post(apiChatMessage, {message: value})
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  }
}

export default battle
