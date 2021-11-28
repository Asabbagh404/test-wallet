<template>
  <div class="container flex flex-col">
    <label>{{ $t('TheLogin.login') }}</label>
    <input type="text" name="login" v-model="login">
    <label>{{ $t('TheLogin.password') }}</label>
    <input type="password" v-model="password">
    <button @click="loginMetaMask">{{ $t('TheLogin.submit')}}</button>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    loginMetaMask() {
      console.log('sended')
    }
  }
}
</script>
