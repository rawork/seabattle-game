<template>
    <div>
        <h2 class="before-message">Время начала игры<br>{{ time }}</h2><br><button class="btn" v-on:click="reloadPage">Обновить страницу</button>
    </div>
</template>

<script>
export default {
  computed: {
    time () {
      let dt = new Date(this.$store.state.startTime * 1000)
      return dt.getDate() + '.' + (dt.getMonth() + 1) + '.' + dt.getFullYear() + ' ' + dt.getHours() + ':' + dt.getMinutes()
    }
  },
  methods: {
    reloadPage: function () {
      window.location.reload()
    }
  }
}
</script>

export default BeforeScreen;