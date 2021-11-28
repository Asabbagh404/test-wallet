<template>
  <div class="container flex flex-col">
    <button @click="connectWallet">{{ $t('TheLogin.connect') }}</button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {store, Action} from "../store";

export default defineComponent({
  onMounted() {
    store.getters.getWallets > 0 && this.$router.push('/')
  },
  methods: {
     connectWallet(): void {
      store.dispatch(Action.addWallets).then(() => {
        this.$router.push('/')
      })
    },

  }
})
</script>
