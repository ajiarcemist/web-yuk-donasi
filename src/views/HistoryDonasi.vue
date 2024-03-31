<script setup>
import FooterNav from '@/components/FooterNav.vue'
import CardHistory from '@/components/CardHistory.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body class="mx-auto shadow">
    <FooterNav />
    <div class="container">
      <!-- card daftar donasi -->
      <h2 class="history-donasi">Donasi Anda</h2>
      <RouterLink to="/donasi-sukses"><CardHistory /></RouterLink>
      <RouterLink to="/donasi-sukses"><CardHistory /></RouterLink>
      <RouterLink to="/donasi-sukses"><CardHistory /></RouterLink>
      <RouterLink to="/donasi-sukses"><CardHistory /></RouterLink>
    </div>
    <RouterView />
  </body>
</template>

<style scoped>
/* Gaya CSS dari main.css */

body {
  background-color: #fafafa;
  overflow: auto;
  height: 100dvh;
  max-width: 576px;
}

.history-donasi {
  padding-top: 39px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
}
a {
  text-decoration: none;
}
</style>
