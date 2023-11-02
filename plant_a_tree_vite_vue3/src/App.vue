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

<style scoped lang="scss">
  #plant-a-tree-app {
    display: flex;
    flex-direction: column;
    flex: 1;

    header {
      background: red;
    }

    home {
      background: white;
    }

    footer {
      background: blue;
    }
  }
</style>
