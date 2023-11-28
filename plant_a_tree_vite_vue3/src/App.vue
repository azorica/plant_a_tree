<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<style lang="scss">
  @import './assets/sass/config';

  #plant-a-tree-app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
      background: white;
    }
  }
</style>
