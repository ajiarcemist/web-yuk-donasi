<script setup>
import CardDonasi from '@/components/CardDonasi.vue'
import FooterNav from '@/components/FooterNav.vue'
</script>

<template>
  <body class="mx-auto shadow">
    <FooterNav />
    <div class="container">
      <div class="title-content">
        <div class="row">
          <div class="col-8">
            <div class="title-main">
              <h1>Howdy,<br />Ilham Aji</h1>
            </div>
            <p class="title-desc text-muted">Sudah berbuat baik hari ini?</p>
          </div>

          <div class="col-4">
            <img src="/src/assets/avatar.png" alt="avatar" class="avatar" />
          </div>
        </div>
        <swiper-container
          pagination="true"
          space-between="60"
          slides-per-view="1"
          navigation="true"
          loop="true"
        >
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
        </swiper-container>

        <!-- card daftar donasi -->
        <p class="history-donasi">Donasi Anda</p>
        <div class="card mb-3 card-history border-0 rounded-4">
          <div class="row">
            <div class="col-3 my-auto img-card">
              <img
                src="/src/assets/cover.png"
                class="img-fluid rounded-4 history-img"
                alt="cover-daftar"
              />
            </div>
            <div class="col-9 left-content-card">
              <div class="card-body body-card-history">
                <h5 class="card-title">Pembangunan Masjid</h5>
                <p class="card-text">Tabanan</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-history border-0 rounded-4">
          <div class="row">
            <div class="col-3 my-auto img-card">
              <img
                src="/src/assets/cover.png"
                class="img-fluid rounded-4 history-img"
                alt="cover-daftar"
              />
            </div>
            <div class="col-9 left-content-card">
              <div class="card-body body-card-history">
                <h5 class="card-title">Pembangunan Masjid</h5>
                <p class="card-text">Tabanan</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-history border-0 rounded-4">
          <div class="row">
            <div class="col-3 my-auto img-card">
              <img
                src="/src/assets/cover.png"
                class="img-fluid rounded-4 history-img"
                alt="cover-daftar"
              />
            </div>
            <div class="col-9 left-content-card">
              <div class="card-body body-card-history">
                <h5 class="card-title">Pembangunan Masjid</h5>
                <p class="card-text">Tabanan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
/* Gaya CSS dari main.css */

/* Avatar */
body {
  background-color: #fafafa;
  overflow: auto;
  height: 100dvh;
  max-width: 576px;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid white;
  background-size: cover;
}

/* Progress bar */
.progress {
  margin-bottom: 12px;
}

/* Total donasi */
.total-donasi {
  color: #00bf99;
}

/* Card text */
.card-text {
  margin-top: -5px;
  opacity: 0.5;
}
.title-content {
  margin-top: 19px;
  padding-bottom: 70px;
}
.title-main {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
}
.title-desc {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: light;
}
.history-donasi {
  margin-top: 39px;
}
.card-history {
  margin-top: 18px;
  margin-bottom: 20px;
}
.card-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
}
.card-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
}
.body-card-history {
  margin: 18px 0px 19px 17.8px;
  padding: 0;
}
.history-img {
  margin-left: 10.86px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 75.99px;
  height: 70px;
}
.left-content-card {
  padding-left: 0px;
}
.img-card {
  padding-right: 0px;
}
</style>
