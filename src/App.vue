<template>
  <v-local-changer />
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import { useRoute } from 'vue-router'
import LayoutDefault from './pages/layouts/LayoutDefault.vue';
import LayoutEmpty from "./pages/layouts/LayoutEmpty.vue";
import VLocalChanger from "./components/helpers/VLocalChanger.vue";

const route =  useRoute(); // TODO: useRoute().meta only

const layout = computed(<Component>() => {
  return route.meta.noLayout ? LayoutEmpty : LayoutDefault
})

</script>
