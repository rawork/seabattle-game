<template>
    <form v-on:submit.prevent="onSubmit">
        <input :value="newMessage" @input="updateNewMessage" autofocus placeholder="Добавить сообщение" />
        <button type="submit" class="btn">Отправить</button>
    </form>
</template>

<script>
import { mapState } from 'vuex'

const ChatForm = {
  computed: {
    ...mapState({
      newMessage: state => state.chatNewMessage
    })
  },
  methods: {
    onSubmit () {
      this.$socket.emit('pingServer', this.$store.state.chatNewMessage)
    },
    updateNewMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    }
  }
}

export default ChatForm
</script>
