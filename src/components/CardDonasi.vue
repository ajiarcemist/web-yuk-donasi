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
  <div class="swipe">
    <div class="d-flex justify-content-center">
      <RouterLink to="/detail" style="text-decoration: none">
        <div class="card rounded-4 card-project">
          <div>
            <div>
              <img src="/src/assets/cardImg.png" class="card-img-top rounded-4" alt="coverCard" />
            </div>
            <div class="card-body card-project-body">
              <h5 class="card-title">Pembangunan Masjid</h5>
              <p class="card-text">Yogyakarta</p>
              <div class="progress">
                <div
                  class="progress-bar warna-progress rounded-4"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>Terkumpul <span class="total-donasi">Rp.230.000.000</span></p>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <RouterView />
</template>
<style scoped>
/* Card */
.card-project {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  margin-top: 32px;
  width: 282px;
}
.card-project-body {
  margin-left: -16px;
  margin-right: -16px;
  padding-bottom: 0px;
}
.card-project {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  margin-top: 32px;
  width: 282px;
}

.warna-progress {
  background-color: #00bf99 !important;
}
.progress {
  margin-bottom: 12px;
}
.card-text {
  margin-top: -5px;
  opacity: 0.5;
}
.card-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
}
.swipe {
  margin-bottom: 50px;
}
</style>
