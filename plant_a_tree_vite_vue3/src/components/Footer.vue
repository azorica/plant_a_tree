<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <footer>
    <span>Copyright - Plant A tree app {{ currentYear }}</span>
  </footer> 
</template>

<style lang="scss">
  footer {
    $forest-color: #228B22;
    $deep-oak: #42280E;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 2rem;
    background-color: rgba($deep-oak, 0.4);
    border-top: 0.3rem solid $forest-color;
    color: $deep-oak;
  }
</style>