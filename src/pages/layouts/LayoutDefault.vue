<template>
<header>
  <nav>
    <router-link to="/">{{ $t('navigations.home')}}</router-link>
    <router-link to="/disconnect">{{ $t('navigations.disconnect')}}</router-link>
  </nav>
</header>
  <main>
    <slot></slot>
  </main>
</template>

<script setup>
</script>