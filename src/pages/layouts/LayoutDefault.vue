<template>
  <header>
    <nav>
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center justify-start sm:items-stretch sm:justify-start hidden md:block">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link to="/" class="LayoutDefault__link">
                  {{ $t('navigations.home') }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <img class="LayoutDefault__logo" src="../../assets/images/logo.svg" alt="Workflow">
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:block">
            <button class="LayoutDefault__button" @click="disconnect">
              {{ $t('navigations.disconnect') }}
            </button>
          </div>
        </div>
      </div>
      <div class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" class="LayoutDefault__link-mobile">
            {{ $t('navigations.home') }}
          </router-link>
          <button class="LayoutDefault__button-mobile">
            {{ $t('navigations.disconnect') }}
          </button>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
import {Action, store} from '../../store';
import { useRouter } from 'vue-router';
const router = useRouter();

const disconnect = () :void => {
  store.dispatch(Action.emptyWallets);
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.LayoutDefault__button {
  @apply
  bg-indigo-600
  p-3
  rounded-full
  text-white
  hover:text-white
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-offset-gray-800
  focus:ring-white
}

.LayoutDefault__button-mobile {
  @apply
  bg-gray-900
  text-white
  block
  px-3
  py-2
  rounded-md
  text-base
  font-medium
}

.LayoutDefault__link {
  @apply
  bg-gray-900
  text-white
  px-3
  py-2
  rounded-md
  text-sm
  font-medium
}

.LayoutDefault__link-mobile {
  @apply
  bg-gray-900
  text-white
  block
  px-3
  py-2
  rounded-md
  text-base
  font-medium
}

.LayoutDefault__logo {
  width: 350px;
}
</style>