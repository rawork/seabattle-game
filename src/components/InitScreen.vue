<template>
    <div style="text-align: center">
        <h2 class="init-message">Игра загружается, подождите...</h2>
        <spinner :size="40" :depth="2" color="#f1f1f1" :speed="1.0"></spinner>
    </div>
</template>

<script>
  import Spinner from 'vue-spinner-component/src/Spinner.vue'

  export default {
    components: {
      Spinner
    }
  }
</script>