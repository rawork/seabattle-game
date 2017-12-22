<template>
  <div class="form">
    <form method="post" v-on:submit.prevent="onSubmit">
      <div v-show="answer" class="answer">Ваш ответ: {{answer}}</div>
      <br />
      <button id="task-btn-answer">Отправить</button>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  const AnswerForm = {
    computed: mapState({
      answer: state => state.answer
    }),
    methods: {
      onSubmit (e) {
        this.$store.dispatch('saveAnswer')
      }
    }
  }

  export default AnswerForm
</script>
