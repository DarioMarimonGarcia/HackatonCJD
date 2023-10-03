<template>
  <topbar />
  <div class="home">
      <h1>HOME</h1>
      <nuxt-link :to="'itxAboutBershka'">About Bershka</nuxt-link>
  </div>
</template>
<script setup>
import Topbar from '@/components/Topbar/index.vue';
</script>
<style lang="scss">
  .home {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
