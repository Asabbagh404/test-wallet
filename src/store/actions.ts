import { ActionTree, ActionContext } from 'vuex'
import { useRouter } from 'vue-router'

import {State, Wallets} from './state'
import { Mutations, Mutation } from './mutations'
import {getLocaleStorageWallet} from "../lib/localStorageWallet";

const router = useRouter();

export enum Action {
  initApp = 'initApp',
  addWallets = 'addWallets',
  syncWallets = 'syncWallets',
  emptyWallets = 'emptyWallets',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [Action.initApp](): void
  [Action.addWallets]({commit }: AugmentedActionContext): void
  [Action.syncWallets]({commit }: AugmentedActionContext): void
  [Action.emptyWallets]({ state, commit, dispatch }: AugmentedActionContext): void
}

export const actions: ActionTree<State, State> & Actions = {
  [Action.initApp]() {
    console.log('app inited!')
  },
  async [Action.addWallets]({commit}) {
    const ethereum = window.ethereum;
    if (typeof ethereum == 'undefined') {
      goToError('You need to download <a href="https://metamask.io/download">metamask</a>')
    }
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    if(accounts.length === 0) {
      goToError('no accounts found')
    }
    console.log(accounts)
    commit(Mutation.ADD_WALLETS, accounts);
  },
  [Action.syncWallets]({commit}) {
    commit(Mutation.ADD_WALLETS, getLocaleStorageWallet());
  },
  [Action.emptyWallets]({commit}) {
    commit(Mutation.EMPTY_WALLETS);
  }
}



function goToError(message: string): void { // TODO: Need to be a prototype or mixins
  router.push({
    name: 'error', params: {
      message
    }
  })
}
