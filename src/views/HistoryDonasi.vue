<script setup>
import FooterNav from '@/components/FooterNav.vue'
import CardHistory from '@/components/CardHistory.vue'
</script>

<template>
  <body class="mx-auto shadow">
    <FooterNav />
    <div class="container">
      <!-- card daftar donasi -->
      <h2 class="history-donasi">Donasi Anda</h2>
      <CardHistory />
    </div>
  </body>
</template>

<style scoped>
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
