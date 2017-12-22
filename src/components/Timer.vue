<template>
    <div class="relative">
        <div class="timer">{{ timerDisplay }}</div>
    </div>
</template>

<script>
  export default {
    computed: {
      timerDisplay () {
        if (Object.keys(this.$store.state.timer).length === 0 && this.$store.state.timer.constructor === Object) {
          return ''
        }

        return this.$store.state.timer.minutes + ':' + (this.$store.state.timer.seconds > 9
            ? this.$store.state.timer.seconds
            : '0' + this.$store.state.timer.seconds
          )
      }
    }
  }
</script>