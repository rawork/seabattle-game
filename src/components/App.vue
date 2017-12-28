<template>
  <div class="battle-app relative">
    <InitScreen v-if="status === 'init'"></InitScreen>
    <ErrorScreen v-else-if="status === 'error'"></ErrorScreen>
    <BeforeScreen v-else-if="status === 'before'"></BeforeScreen>
    <AfterScreen v-else-if="status === 'after'"></AfterScreen>
    <GameScreen v-else></GameScreen>
    <SocketBlock></SocketBlock>
  </div>
</template>

<script>
import InitScreen from './screen/InitScreen.vue'
import BeforeScreen from './screen/BeforeScreen.vue'
import AfterScreen from './screen/AfterScreen.vue'
import GameScreen from './screen/GameScreen.vue'
import ErrorScreen from './screen/ErrorScreen.vue'
import SocketBlock from './SocketBlock.vue'

const App = {
  name: 'app',
  components: {
    InitScreen, BeforeScreen, AfterScreen, GameScreen, ErrorScreen, SocketBlock
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
