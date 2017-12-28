<template>
    <div class="gamer" v-bind:class="[gamerClass, { killed: isOver }]">
        <div class="ship" v-bind:class="[shipClass]"></div>
        <div class="info">
            <span class="dead">{{team.dead}} сбито</span>,
            <span class="alive">{{team.alive}} живо</span>
        </div>
        <img class="flag" :src="team.flag" />
        <div class="name">{{team.name}}</div>
    </div>
</template>

<script>

const User = {
  props: ['team'],
  computed: {
    isOver () {
      return this.team.dead >= 6
    },
    gamerClass () {
      return 'gamer' + this.team.num
    },
    shipClass () {
      return 'gamer_' + this.team.color
    }

  }
}

export default User
</script>
