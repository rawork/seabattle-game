<template>
    <div>
        <div class="battlefield"></div>
        <Cell v-for="cell in field" :key="cell.id" :cell="cell"></Cell>
    </div>
</template>

<script>
import Cell from './Cell.vue'

const Field = {
  computed: {
    field () {
      return this.$store.state.field
    }
  },
  components: { Cell }
}

export default Field
</script>