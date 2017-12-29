<template>
    <div class="chat-app">
        <div class="message-container">
            <message v-for="message in messages" :key="message.id" :message="message"></message>
        </div>
        <chat-form></chat-form>
    </div>
</template>

<script>
import Message from './Message.vue'
import ChatForm from './ChatForm.vue'

const Chat = {
  computed: {
    messages () {
      return this.$store.state.chat.messages
    }
  },
  components: {
    Message, ChatForm
  }
}

export default Chat
</script>