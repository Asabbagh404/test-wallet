<template>
  <div class="rounded-md w-full bg-gray-600 px-4 py-4 shadow-md transition transform duration-500">
    <div class="flex flex-col justify-start text-indigo-300">
      <div class="flex justify-between items-center w-96">
        <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
          <span>{{ wallet.address }}</span>
        </div>
      </div>
      <div class="text-xl flex space-x-1 items-center">
        <span class="flex">
          <v-spinner v-if="balanceLoading" />
          <template v-else>
              <div class="flex">
                <svg height="30" width="20" preserveAspectRatio="xMidYMid"
                                     viewBox="-38.39985 -104.22675 332.7987 625.3605"><path fill="#343434"
                                                                                            d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z"/><path
                  fill="#8C8C8C" d="M127.962 287.959V0L0 212.32z"/><path fill="#3C3C3B"
                                                                         d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z"/><path
                  fill="#8C8C8C" d="M0 236.585l127.962 180.32v-104.72z"/><path fill="#141414"
                                                                               d="M127.961 154.159v133.799l127.96-75.637z"/><path
                  fill="#393939" d="M127.96 154.159L0 212.32l127.96 75.637z"/></svg>
                {{ balance }}
              </div>
              <div>${{ balanceUSD }}</div>
          </template>
        </span>
      </div>
    </div>
  </div>
  <hr>
</template>

<script lang="ts" setup>
import VSpinner from '@/components/helpers/VSpinner.vue'
import { ref, onMounted, computed, PropType } from 'vue'

const props: PropType = defineProps({
  wallet: {
    type: Object,
    required: true,
  },
});
let balance = ref(-1)
let balanceUSD = ref(-1)

onMounted(() => {
  props.wallet.balance().then((res) => {
    balance.value = res;
  })
  props.wallet.balanceInUsd().then((res) => {
    balanceUSD.value = res
  })
});

const balanceLoading = computed(():boolean => {
  return balance.value < 0 && balanceUSD.value < 0;
});
</script>
