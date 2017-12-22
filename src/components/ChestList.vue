<template>
    <div class="chests">
        <ul>
            <li v-for="chest in chests" @click="check(chest)">
                <img src="static/img/chest.png" />
                <div v-show="chest.checked" class="checkbox"></div>
                <span>{{ chest.value }}</span> пиастров</li>
        </ul>
    </div>
</template>

<script>
import {CHOOSE_CHEST} from '../store/mutation-types'

const ChestList = {
  computed: {
    chests () {
      return this.$store.state.chests
    }
  },
  methods: {
    check (chest) {
      this.$store.commit(CHOOSE_CHEST, chest)
    }
  }
}

export default ChestList
</script>