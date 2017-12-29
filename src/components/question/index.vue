<template>
    <div class="modal" v-bind:class="[activeClass]">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="answer-timer">{{timer}}</div>
                <div class="question">{{question.question}}</div>
                <div class="answers">
                    <input type="radio" id="answer_1" v-model="answer" value="1" />
                    <label for="answer_1" v-bind:click="setAnswer(1)">{{question.answer1}}</label>
                    <br />
                    <br />
                    <input type="radio" id="answer_2" v-model="answer" value="2" />
                    <label for="answer_2" v-bind:click="setAnswer(2)">{{question.answer2}}</label>
                    <br />
                    <br />
                    <input type="radio" id="answer_3" v-model="answer" value="3" />
                    <label for="answer_3" v-bind:click="setAnswer(3)">{{question.answer3}}</label>
                </div>
                {{answer}}
                <button class="btn" v-bind:click="onSubmit">Ответить</button>
            </div>
        </div>
    </div>
</template>

<script>

const Question = {
  computed: {
    timer () {
      return this.$store.state.question.timer
    },
    question () {
      return this.$store.state.question.question
    },
    activeClass () {
      return this.$store.state.question.timer > 0 ? 'active' : ''
    },
    answer: {
      get () {
        return this.$store.state.question.answer
      },
      set (value) {
        this.$store.commit('question/SET_ANSWER', value)
      }
    }
  },
  methods: {
    setAnswer (e, value) {
      this.$store.commit('question/SET_ANSWER', value)
    },
    onSubmit () {
      this.$store.dispatch('question/saveAnswer')
    }
  }
}

export default Question
</script>