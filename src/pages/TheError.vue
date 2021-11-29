<template>
  <div v-html="message"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface loginForm {
  login: string
  password: string
}

export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'Error page not found'
    }
  },
})
</script>

<style scoped>
a {
  color: blue;
}
</style>