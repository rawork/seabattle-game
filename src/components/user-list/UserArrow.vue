<template>
    <div class="arrow" v-bind:class="[ arrowClass, { active: team.isCurrent }]"></div>
</template>

<script>

const UserArrow = {
  props: ['team'],
  computed: {
    arrowClass () {
      return 'arrow' + this.team.num
    }
  }
}

export default UserArrow
</script>
