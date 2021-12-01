<template>
  <div class="mt-20">
    <h2 class="mb-3">{{ $t('EthereumBalance.title') }}</h2>
    <template v-for="wallet in walletsData" :key="wallet.address">
      <ethereum-balance-card
          :wallet="wallet"
      />
    </template>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, reactive} from 'vue'
import EthWallet from "../application/entity/EthWallet";
import {store} from '../store';
import {Wallets} from "../store/state";
import {NetworkEnum} from "../application/entity/enum/network.enum";
import EthereumBalanceCard from "./EthereumBalanceCard.vue";

const walletsAddress: Wallets = store.getters.getWallets;
const walletsData = reactive([]);

onMounted(async (): void => {
    for (let walletAddress of walletsAddress) {
      walletsData.push(new EthWallet(walletAddress, NetworkEnum.MAINNET));
    }
});
</script>

<style scoped>
a {
  text-decoration: underline;
  color: rgb(42, 42, 199);
  font-weight: bold;
}
</style>
