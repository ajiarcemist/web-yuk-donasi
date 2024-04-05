<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.back()
    }

    return {
      goBack
    }
  }
}
</script>

<template>
  <body class="mx-auto shadow">
    <!-- card daftar donasi -->
    <div class="banner pb-2">
      <div class="container pt-4 mb-3 px-4">
        <div class="d-flex justify-content-between">
          <div class="go-back">
            <img @click="goBack" class="pointer" src="/src/assets/black-arrow.svg" alt="arrow" />
          </div>

          <div><img src="/src/assets/sign-out-alt.svg" alt="sign-out" /></div>
        </div>

        <div class="img-banner text-center mt-4">
          <img src="/src/assets/black-elipse.svg" alt="white-check" />
        </div>
        <div>
          <h4 class="text-center mt-5 desc-banner">Andri Nur Hidayatuilloh</h4>
        </div>
        <div>
          <p class="text-center email-banner mt-4">andribis13@gmail.com</p>
        </div>
        <div>
          <p class="text-center phone-banner">087838698443</p>
        </div>
      </div>
    </div>
    <div class="container info-donasi">
      <div class="row mt-5 pb-2">
        <div class="col-6">
          <h6 class="text-start">Informasi Donasi</h6>
        </div>
        <div class="col-6 text-end">
          <img src="/src/assets/pen.svg" alt="pen" />
        </div>
      </div>

      <div class="row justify-content-end mt-5">
        <div class="col-6">
          <p class="text-muted text-start">Total Donasi</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">Rp. 2.500.000</p>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-6">
          <p class="text-muted text-start">Tanggal Terdaftar</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">27 Oktober 2024</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-6 justify-content-end">
          <p class="text-muted text-start">Status Akun</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">Aktif</p>
        </div>
      </div>
      <hr class="text-muted" />
      <div class="row justify-content-end">
        <div class="col-6 justify-content-end">
          <p class="text-muted text-start">Hubungi Kami</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">Lihat</p>
        </div>
      </div>
    </div>
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
.banner {
  background: #fafafa;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: black;
}

.img-banner img {
  width: 109px;
  height: 109px;
}
.title-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
}
.desc-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
}
.email-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.phone-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-top: -15px;
}

.info-donasi h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
}
.info-donasi p {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.info-donasi {
  max-width: 95%;
}
.pointer {
  cursor: pointer;
}
</style>
