import axios from 'axios'

const apiUrl = '/static/test.json'
// const apiUrl = 'http://korsar2/ajax/sandbox/task/data';

const task = {
  getData: function (successHandler, failureHandler) {
    axios.get(apiUrl + '?_=' + new Date().getTime())
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  },

  setData: function (value, successHandler, failureHandler) {
    axios.post(apiUrl, {answer: value})
      .then(response => successHandler(response))
      .catch(error => failureHandler(error))
  }
}

export default task
