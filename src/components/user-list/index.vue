<template>
    <div>
        <User v-for="team in teams" :key="team.shooter_id" :team="team"></User>
        <UserArrow v-for="team in teams" :key="team.shooter_id" :team="team"></UserArrow>
        <UserMark v-for="team in teams" :key="team.shooter_id" :team="team"></UserMark>
    </div>
</template>

<script>
import User from './User.vue'
import UserArrow from './UserArrow.vue'
import UserMark from './UserMark.vue'

const UserList = {
  computed: {
    teams () {
      return this.$store.state.teams
    }
  },
  components: { User, UserArrow, UserMark }
}

export default UserList
</script>