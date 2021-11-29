<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import { useRoute } from 'vue-router'
import LayoutDefault from './pages/layouts/LayoutDefault.vue';
import LayoutEmpty from "./pages/layouts/LayoutEmpty.vue";

const meta =  useRoute().meta

const layout = computed(<Component>() => {
  return meta.noLayout ? LayoutEmpty : LayoutDefault
})

</script>
