<script></script>
<template>
  <body class="mx-auto shadow">
    <!-- navbar -->

    <!-- card daftar donasi -->
    <div class="banner pb-5">
      <div class="container pt-4 mb-3 px-4">
        <div class="row">
          <div class="col-2">
            <img src="/src/assets/arrow-left.svg" alt="arrow" />
          </div>

          <div class="col-8 text-center">
            <h4 class="title-banner">Informasi Donasi</h4>
          </div>
        </div>
        <div class="img-banner text-center mt-4">
          <img src="/src/assets/white-flag.svg" alt="white-check" />
        </div>
        <div>
          <h4 class="text-center mt-3 desc-banner">Donasi Sedang Dikonfirmasi</h4>
        </div>
        <div>
          <h1 class="text-center mt-5 nominal-banner">Rp. 2.500.000</h1>
        </div>
      </div>
    </div>
    <div class="container info-donasi">
      <div><h6 class="mt-5 pb-2">Informasi Donasi</h6></div>
      <div class="row justify-content-end">
        <div class="col-6"><p class="text-muted text-start">Campaign</p></div>
        <div class="col-6">
          <p class="text-muted text-end">Pembangunan Masj...</p>
        </div>
      </div>
      <div><h6 class="mt-4 pb-2">Informasi Transaksi</h6></div>
      <div class="row justify-content-end">
        <div class="col-6">
          <p class="text-muted text-start">No Transaksi</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">INV-21314142424242</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-6 justify-content-end">
          <p class="text-muted text-start">Tanggal</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">29 September 2024</p>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
/* Gaya CSS dari main.css */

body {
  background-color: #fafafa;

  height: 100dvh;
  max-width: 576px;
}
.banner {
  background: #ff7c03;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: white;
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
.nominal-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
}
.confirm-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
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
</style>
