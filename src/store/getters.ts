import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  isReady(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
  isReady(state) {
    return state.isInitialized && state.wallets.length > 0
  },
  getWallets(state) {
    return state.wallets
  },
}
