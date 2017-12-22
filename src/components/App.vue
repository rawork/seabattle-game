<template>
  <div class="task-app">
    <InitScreen v-if="status === 'init'"></InitScreen>
    <ErrorScreen v-else-if="status === 'error'"></ErrorScreen>
    <BeforeScreen v-else-if="status === 'before'"></BeforeScreen>
    <AfterScreen v-else-if="status === 'after'"></AfterScreen>
    <GameScreen v-else></GameScreen>
  </div>
</template>

<script>
import InitScreen from './InitScreen.vue'
import BeforeScreen from './BeforeScreen.vue'
import AfterScreen from './AfterScreen.vue'
import GameScreen from './GameScreen.vue'
import ErrorScreen from './ErrorScreen.vue'

const App = {
  name: 'app',
  components: {
    InitScreen, BeforeScreen, AfterScreen, GameScreen, ErrorScreen
  },
  computed: {
    status () {
      return this.$store.state.status
    }
  }
}

export default App
</script>

<style lang="scss">
  @import '../assets/css/main.scss';
</style>
