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
import { defineComponent } from 'vue'

interface loginForm {
  login: string
  password: string
}

export default defineComponent({
  data() {
    return {
      form: {
        login: '',
        password: ''
      } as loginForm
    }
  },
  methods: {
    loginMetaMask(): boolean {
      if (typeof window.ethereum == 'undefined') {
        this.$router.push({ name: 'error', params: {
          message: 'You need to download <a href="https://metamask.io/download">metamask</a> '
        }})
      }
      return true;
    }
  }
})
</script>
