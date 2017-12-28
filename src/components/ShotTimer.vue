<template>
    <div v-show="timerShot" class="user-panel">Ваш ход, торопитесь выбрать клетку {{timerShot}}</div>
</template>

<script>

const ShotTimer = {
  computed: {
    timerShot () {
      return this.$store.state.timerShot
    }
  }
}

export default ShotTimer
</script>