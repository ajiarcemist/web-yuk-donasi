<script></script>
<template>
  <div class="card mb-3 card-history border-0 rounded-4">
    <div class="row">
      <div class="col-3 my-auto img-card">
        <img
          src="/src/assets/cover.png"
          class="img-fluid rounded-4 history-img"
          alt="cover-daftar"
        />
      </div>
      <div class="col-7 left-content-card">
        <div class="card-body body-card-history">
          <h5 class="card-title">Pembangunan Mas...</h5>
          <p class="card-text">Tabanan</p>
        </div>
      </div>
      <div class="col-2">
        <img src="/src/assets/check.svg" alt="checkmark" class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Gaya CSS dari main.css */

/* Card text */
.card-text {
  margin-top: -5px;
  opacity: 0.5;
}

.history-donasi {
  padding-top: 39px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
}
.card-history {
  margin-top: 18px;
  margin-bottom: 20px;
  text-decoration: none;
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

.col-2 {
  display: flex;
  padding-left: 0px;
  align-items: center; /* Vertically center */
}

/* Adjust margin for better alignment */
</style>
