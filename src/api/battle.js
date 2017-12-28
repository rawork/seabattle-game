import axios from 'axios'

const apiUrl = '/static/test.json'
// const apiUrl = '/api/battle/data';

const battle = {
  getData: function (successHandler, failureHandler) {
    axios.get(apiUrl + '?_=' + new Date().getTime())
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },
  getQuestion: function (successHandler, failureHandler) {
    axios.get(apiUrl + '?_=' + new Date().getTime())
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
  }

}

export default battle
