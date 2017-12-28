<template>
    <div class=[markClass]></div>
</template>

<script>

const UserMark = {
  props: ['team'],
  computed: {
    markClass () {
      return 'mark-' + this.team.color
    }
  }
}

export default UserMark
</script>
