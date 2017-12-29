<template>
    <div>
        <User v-for="team in teams" :key="team.shooter_id" :team="team"></User>
        <div class="arrow arrow1"></div>
        <div class="arrow arrow2"></div>
        <div class="arrow arrow3"></div>
        <div class="mark-red"></div>
        <div class="mark-green"></div>
        <div class="mark-brown"></div>
    </div>
</template>

<script>
import User from './User.vue'

const UserList = {
  computed: {
    teams () {
      return this.$store.state.teams
    }
  },
  components: { User }
}

export default UserList
</script>