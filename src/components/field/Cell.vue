<template>
    <div v-if="isShooter" class="cell" v-bind:class="[cellClass, activeCLass]" v-on:click="onClick" />
    <div v-else class="cell" v-bind:class="[cellClass, activeClass]" />
</template>

<script>

const Cell = {
  props: ['cell'],
  computed: {
    cellClass () {
      return 'cell' + this.cell.name
    },
    activeClass () {
      return this.cell.type + (this.cell.type === '' && this.$store.state.isShooter ? ' active' : '')
    },
    isShooter () {
      return this.$store.state.isShooter && this.cell.type === ''
    }
  },
  methods: {
    onClick () {
      this.$store.dispatch('openQuestion', this.cell.name)
    }
  }
}

export default Cell
</script>