<script>
import CardDonasi from '@/components/CardDonasi.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    CardDonasi
  },
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
  <body class="mx-auto">
    <div class="background-full">
      <div class="bg-image">
        <img class="img-fluid" src="/src/assets/cardImg.png" alt="background-img" />
        <div class="mask" style="background-color: hsla(0, 0%, 0%, 0.4)"></div>
      </div>

      <div class="container container-full px-4">
        <div class="col-2 go-back">
          <img @click="goBack" class="pointer" src="/src/assets/arrow-left.svg" alt="arrow" />
        </div>
        <div class="title-donation">
          <div><h1>Pembangunan Masjid</h1></div>
          <div><p>Yogyakarta</p></div>
        </div>

        <div class="container container-card rounded-4">
          <p class="title-card">Tentang</p>
          <p class="title-content">
            Masjid ini sangat diperlukan untuk warga muslim di wilayah Mergangsan Kota Yogyakarta,
            sehingga mereka dapat dengan khidmat beribadah jamaah.
          </p>
          <p class="donation-need">Dibutuhkan: Rp.670.000.000</p>
          <div class="progress">
            <div
              class="progress-bar rounded-4 warna-progress"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="total-donasi">
            <p class="text-muted">Terkumpul <span class="text-donasi">Rp.230.000.000</span></p>
          </div>

          <p class="title-nominal">Nominal</p>
          <div class="border border-1 rounded nominal-amount">10.000.000</div>
        </div>
        <swiper-container
          pagination="true"
          space-between="60"
          slides-per-view="1"
          navigation="false"
          loop="true"
        >
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
          <swiper-slide><CardDonasi class="my-5"> </CardDonasi></swiper-slide>
        </swiper-container>
        <div class="mx-auto d-grid sumbang-button pb-4">
          <button class="btn button-sumbang text-wrap" type="button">Sumbangkan Sekarang!</button>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped>
/* Default background for all elements */

body {
  /* position: relative; */
  max-width: 576px;
  background-color: #fafafa;
  height: 100dvh;
}
.background-full {
  background-color: #fafafa;
}

/* White background for the card itself */
.container-card {
  background-color: #ffff;
  padding: 30px 20px 24px 20px;
}

.title-donation {
  color: white;
}
.container-full {
  margin-top: -35%;
  position: relative;
  z-index: 2; /* Higher z-index to appear in front */
}

/* Progress bar */
.progress {
  margin-bottom: 16px;
}

.progress-bar {
  width: 50%;
}
.container-card .progress .progress-bar.warna-progress {
  /* Existing styles */
  width: 50%;
  color: #00bf99;
  background-color: #00bf99;
}

/* Total donasi */
.text-donasi {
  color: #00bf99;
}
.nominal-amount {
  padding: 14px 18px 14px 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.button-sumbang {
  background-color: #009a84;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-style: normal;
  margin-top: 46px;
  color: white;
}
.title-card {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
}
.title-content {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 26px;
  margin-bottom: 33px;
}
.donation-need {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
}
.total-donasi {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 36px;
  max-width: 576px;
}

.title-donation h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: bold;
}
.title-donation p {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
  margin-top: -5px;
}
.title-nominal {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-style: light;
}
.text-muted {
  opacity: 50%;
  font-style: light;
  font-weight: normal; /* Added to remove bold */
}
.pointer {
  cursor: pointer;
  margin-top: -15vh;
  height: 30px;
  width: 30px;
}
.sumbang-button {
  margin-top: -30px;
}
</style>
