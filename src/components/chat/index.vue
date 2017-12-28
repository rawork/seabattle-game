<template>
    <div class="chat-app">
        <div class="message-container">
            <ChatMessage v-for="message in messages" :key="message.id" :message="message"></ChatMessage>
        </div>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue'
import ChatForm from './ChatForm.vue'

const Chat = {
  computed: {
    messages () {
      return this.$store.state.chatMessages
    }
  },
  components: {
    ChatMessage, ChatForm
  }
}

export default Chat
</script>