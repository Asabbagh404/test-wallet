import { MutationTree } from 'vuex'
import { State, Wallets } from './state'
import {setLocaleStorageWallet} from "../lib/localStorageWallet";

export enum Mutation {
  INCREMENT = 'INCREMENT',
  ADD_WALLETS = 'ADD_WALLETS',
  EMPTY_WALLETS = 'EMPTY_WALLETS',
}

export type Mutations<S = State> = {
  [Mutation.INCREMENT](state: S, payload: number): void
  [Mutation.ADD_WALLETS](state: S, payload: Wallets): void
  [Mutation.EMPTY_WALLETS](state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.INCREMENT](state: State, payload: number = 1): void {
    state.count += payload
  },
  [Mutation.ADD_WALLETS](state: State, payload: Wallets): void {
    for(let wallet of payload) {
      if(!state.wallets.includes(wallet)){
        state.wallets.push(wallet)
      }
    }
    if(state.wallets.length > 0) state.isInitialized = true;
    setLocaleStorageWallet(state.wallets);
  },
  [Mutation.EMPTY_WALLETS](state: State): void {
    localStorage.clear();
    state.wallets = []
  },
}
