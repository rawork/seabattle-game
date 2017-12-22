import Vue from 'vue'
import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'
import App from './components/App.vue'
import store from './store'

export const SocketInstance = socketio('http://localhost:4113');

Vue.use(VueSocketIO, SocketInstance, store)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#battle-app',
  store,
  render: h => h(App),
  components: { App },
  mounted () {
    store.dispatch('initTask')
  }
})
