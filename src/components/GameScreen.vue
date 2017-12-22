<template>
  <div>
    <Timer></Timer>
    <div class="description">Имперский галеон везет 6 сундуков с пиастрами для выплаты жалованья гарнизонам,<br>расположенным на островах Анкорского моря. В сундуках находится разное количество пиастров:</div>
    <ChestList></ChestList>
    <div class="conditions">В первый гарнизон на оплату жалованья солдатам передали ровно два полных сундука, а во второй —три. В обоих случаях денег как раз хватило, так что на других сундуках замки открывать не пришлось. Причем в первом гарнизоне сумма жалованья была в два раза меньше, чем во втором. Затем имперский галеон отправился к следующему гарнизону. Из шести сундуков на нем остался только один. Сколько в нем было пиастров?<br /><strong>Выберите сундук, кликнув на нем.</strong></div>
    <AnswerValue v-if="isAnswered"></AnswerValue>
    <AnswerForm v-else></AnswerForm>
  </div>
</template>

<script>
  import Timer from './Timer.vue'
  import ChestList from './ChestList.vue'
  import AnswerForm from './AnswerForm.vue'
  import AnswerValue from './AnswerValue.vue'

  const GameScreen = {
    name: 'gamescreen',
    components: {
      Timer, ChestList, AnswerForm, AnswerValue
    },
    computed: {
      isAnswered () {
        return this.$store.state.isAnswered
      }
    }
  }

  export default GameScreen
</script>
