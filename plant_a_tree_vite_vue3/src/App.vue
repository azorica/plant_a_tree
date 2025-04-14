<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<style lang="scss">
  @use './assets/sass/config';

  #plant-a-tree-app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
      padding: 2rem;
      background: white;
    }
  }
</style>
