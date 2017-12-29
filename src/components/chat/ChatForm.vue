<template>
    <form v-on:submit.prevent="onSubmit">
        <input :value="newMessage" @input="updateNewMessage" autofocus placeholder="Добавить сообщение" />
        <button type="submit" class="btn">Отправить</button>
    </form>
</template>

<script>
import { mapState } from 'vuex'
import { SET_NEW_MESSAGE } from '../../store/chat/mutation-types'

const ChatForm = {
  name: 'chat-form',
  computed: {
    ...mapState({
      newMessage: state => state.chat.newMessage
    })
  },
  methods: {
    onSubmit () {
      const message = this.$store.state.chat.newMessage
      if (message) {
        this.$socket.emit('newMessage', message)
//      this.$store.dispatch('chat/addMessage', message)
      }
    },
    updateNewMessage (e) {
      this.$store.commit('chat/' + SET_NEW_MESSAGE, e.target.value)
    }
  }
}

export default ChatForm
</script>
