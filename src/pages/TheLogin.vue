<template>
  <div class="container flex flex-col m-auto">
    <img src="../assets/images/metamask_icon.png" alt="logo" class="TheLogin__logo">
    <button @click="connectWallet" class="TheLogin__button">{{ $t('TheLogin.connect') }}</button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {store, Action} from '../store';

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

<style lang="scss" scoped>
.TheLogin__logo {
  width: 120px;
  @apply
  m-auto
}
.TheLogin__button {
  @apply
  w-full
  sm:w-1/2
  md:w-1/3
  lg:w-1/4
  xl:w-1/6
  mt-8
  mx-auto
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
}
</style>
