<template>
  <!-- navbar -->
  <nav class="navbar fixed-bottom mx-auto">
    <div class="container px-4">
      <RouterLink class="navbar-brand pt-2" to="/">
        <img src="/src/assets/home-2.svg" alt="home" />
      </RouterLink>
      <RouterLink class="navbar-brand" to="/history-donasi">
        <img src="/src/assets/clock.svg" alt="clock" />
      </RouterLink>
      <RouterLink class="navbar-brand" to="#">
        <img src="/src/assets/heart.svg" alt="heart" />
      </RouterLink>
      <RouterLink class="navbar-brand" to="/profile">
        <img src="/src/assets/user.svg" alt="User" />
      </RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
.navbar {
  z-index: 4;
  background-color: white;
  max-width: 576px;
}
</style>
