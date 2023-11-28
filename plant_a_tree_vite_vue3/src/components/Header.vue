<script setup>
</script>
<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/images/tree.svg" alt="Plant a Tree logo">
    </div>
    <nav role="navigation">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/mission">Our Mission</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  .header {
    $forest-color: #228B22;
    $deep-oak: #42280E;

    display: flex;
    align-items: center;
    width: 100%;
    min-height: 5rem;
    background-color: $forest-color;
    border-bottom: 0.5rem solid $deep-oak;
    border-radius: 0 0 30% 0;

    .logo {
      padding: 2rem;

      img {
        height: 8rem;
      }
    }

    nav {
      ul {
        list-style-type: none;
        padding: 0;

        li {
          display: inline;
          padding: 1rem 1.5rem;

          a {
            color: white;
            font-size: 2rem;
          }
        }
      }
    }

  }
</style>