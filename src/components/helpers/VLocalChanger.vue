<template>
  <div class="absolute right-5 bottom-5">
    <select v-model="$i18n.locale" class="bg-gray-600">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return { langs: ['fr', 'en'] }
  }
}
</script>