<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
</script>

<template>
  <Header/>
  <Home/>
  <Footer/>
</template>

<style lang="scss">
  #plant-a-tree-app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    header {
      background: #bb9f9fc8;
    }

    .home {
      flex: 1;
      background: white;
    }

    footer {
      flex: none;
      background: #cccccc;
    }
  }
</style>
