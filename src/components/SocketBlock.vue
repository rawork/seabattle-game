<template>
    <div class="connection-panel">
        <p v-if="isConnected">Вы подключены к игре</p>
        <p>Message from server: "{{socketMessage}}"</p>
        <button @click="pingServer()">Ping Server</button>
    </div>
</template>

<script>
  export default {
    computed: {
      socketMessage () {
        return this.$store.state.socketMessage
      },
      isConnected () {
        return this.$store.state.isConnected
      }
    },
    methods: {
      pingServer () {
        this.$socket.emit('pingServer', 'PING!')
      }
    }
  }
</script>