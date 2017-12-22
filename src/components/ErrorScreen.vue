<template>
    <h2 class="init-message">{{ error }}</h2>
</template>

<script>
  const ErrorScreen = {
    computed: {
      error () {
        return this.$store.state.error
      }
    }
  }

  export default ErrorScreen
</script>
