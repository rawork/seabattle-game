<template>
  <div>
    <Timer></Timer>
    <UserList></UserList>
    <ShotTimer></ShotTimer>
    <Field></Field>
    <Chat></Chat>
    <Question></Question>
    <SocketBlock></SocketBlock>
  </div>
</template>

<script>
  import Timer from '../Timer.vue'
  import Question from '../question/index.vue'
  import ShotTimer from '../ShotTimer.vue'
  import UserList from '../user-list/index.vue'
  import Field from '../field/index.vue'
  import Chat from '../chat/index.vue'
  import SocketBlock from '../SocketBlock.vue'

  const GameScreen = {
    name: 'gamescreen',
    components: {
      Timer, Question, ShotTimer, UserList, Field, Chat, SocketBlock
    },
    computed: {
      isAnswered () {
        return this.$store.state.isAnswered
      }
    }
  }

  export default GameScreen
</script>
