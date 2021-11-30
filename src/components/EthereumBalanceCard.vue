<template>
  <div class="rounded-xl w-full bg-gray-800 px-4 py-4 shadow-md transition transform duration-500 mb-10">
    <h3 class="text-md mb-3">{{ $t('EthereumBalanceCard.title')}}</h3>
    <div class="flex flex-col justify-start text-white">
      <div class="text-xl flex space-x-1 justify-between">
        <span class="flex">
          <v-spinner v-if="balanceLoading"/>
          <template v-else>
              <div class="flex text-5xl font-bold">
                ${{ balanceUSD }}
              </div>
          </template>
        </span>
        <img src="@/assets/images/eth_icon.svg" class="EthereumBalanceCard__Eth">
      </div>
    </div>
    <div class="flex justify-between items-center w-full mt-3">
      <div
          class="text-sm font-semibold flex-wrap text-bookmark-blue flex space-x-1 items-center mb-2 w-full break-all justify-between">
        <div class="flex mr-5" v-if="!balanceLoading">
          {{ balance }} ETH
        </div>
        <div>
          {{ wallet.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VSpinner from '@/components/helpers/VSpinner.vue'
import {ref, onMounted, computed, PropType} from 'vue'

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

const balanceLoading = computed((): boolean => {
  return balance.value < 0 && balanceUSD.value < 0;
});
</script>

<style scoped lang="scss">
.EthereumBalanceCard__Eth{
  position: absolute;
  right: 0;
  top: 0;
  background: white;
  padding-left: 15px;
  padding-right: 5px;
  border-radius: 0 0 0 15px;
}
</style>
