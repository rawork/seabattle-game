<template>
    <div class="answer">Ваш ответ: {{answer}}</div>
</template>

<script>

const AnswerValue = {
  computed: {
    answer () {
      return this.$store.state.answer
    }
  }
}

export default AnswerValue
</script>