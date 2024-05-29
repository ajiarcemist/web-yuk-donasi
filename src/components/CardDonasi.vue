<template>
  <swiper-container space-between="60" slides-per-view="1" navigation="true" loop="true">
    <swiper-slide v-for="campaign in campaigns" :key="campaign.id">
      <div class="my-5">
        <div class="swipe">
          <div class="d-flex justify-content-center">
            <RouterLink :to="`/detail/${campaign.id}`" style="text-decoration: none">
              <div class="card rounded-4 card-project">
                <div>
                  <div>
                    <img
                      :src="campaign.campaign_image_url"
                      class="card-img-top rounded-4"
                      alt="coverCard"
                    />
                  </div>
                  <div class="card-body card-project-body">
                    <h5 class="card-title">{{ campaign.title }}</h5>
                    <p class="card-text">{{ campaign.location }}</p>
                    <div class="progress">
                      <div
                        class="progress-bar warna-progress rounded-4"
                        role="progressbar"
                        :style="{ width: campaign.percentage_value + '%' }"
                        :aria-valuenow="campaign.percentage_value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>
                      Terkumpul
                      <span class="total-donasi">{{ formatRupiah(campaign.current_amount) }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <RouterView />
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from '../interceptors/axios'

export default {
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      campaigns: [],
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}campaigns`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        this.campaigns = response.data.data
        console.log('Fetched campaigns:', this.campaigns)
      } catch (err) {
        this.error = 'Failed to fetch data'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    formatRupiah(amount) {
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      })
      return formatter.format(amount)
    }
  }
}
</script>

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
