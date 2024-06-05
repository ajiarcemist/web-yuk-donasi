<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>
<template>
  <body class="mx-auto shadow">
    <div class="container container-atas">
      <div class="d-grid">
        <img class="mx-auto" src="/src/assets/donation.png" alt="donation success" />
        <div style="margin-top: 80px">
          <h1>Berhasil Mendaftar 😍</h1>
          <p
            style="
              font-family: Poppins;
              font-size: 16px;
              font-weight: 300;
              line-height: 28px;
              letter-spacing: 0em;
              text-align: center;
              opacity: 0.5;
            "
          >
            Terima kasih atas donasimu,<br />semoga donasi ini berbuah berkah!
          </p>
        </div>

        <RouterLink to="/">
          <button type="submit" class="btn login-button mt-4">Donasi Lagi</button>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </body>
</template>
<style scoped>
body,
html {
  height: 100%;
  background-color: #fafafa;
}
body {
  max-width: 576px;
  height: 100dvh;
}

.container-atas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.login-button {
  display: block;
  width: 100%;
  margin-top: 20px;
  background-color: #009a84;
  color: white;
}
a {
  text-decoration: none;
}
img {
  width: 70%;
}
</style>
