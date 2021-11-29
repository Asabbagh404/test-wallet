<template>
  <h1 class="flex  justify-center ">{{ $t("titles.main") }}</h1>
  <ethereum-balance />
</template>
<script setup lang="ts">
import EthereumBalance from "@/components/EthereumBalance.vue";

</script>
