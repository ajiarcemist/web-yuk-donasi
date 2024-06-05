<script>
import CardDonasi from '@/components/CardDonasi.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

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
  },
  data() {
    return {
      campaigns: {},
      listCampaigns: [],
      loading: true,
      error: null,
      filled: {
        nominal: ''
      },
      paymentLink: ''
    }
  },
  watch: {
    '$route.params.id': 'reloadPageDetailCampaign'
  },
  created() {
    this.fetchData()
    this.fetchCampaigns()
  },
  methods: {
    goToDetail(id) {
      this.$router.replace('/detail/' + id)
    },
    async fetchData() {
      try {
        const campaignsId = this.$route.params.id
        console.log(campaignsId)
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}campaigns/${campaignsId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )
        this.campaigns = response.data.data
        console.log('Fetched campaigns:', this.campaigns)
      } catch (err) {
        if (
          err.response &&
          err.response.status === 401 &&
          err.response.data.meta &&
          err.response.data.meta.status === 'TOKEN_EXPIRED'
        ) {
          console.log('**Token expired. Clearing local storage...**')
          localStorage.removeItem('token')
          localStorage.removeItem('user_id')
          this.error = 'Token expired. Please log in again.'
        } else {
          this.error = 'Failed to fetch data'
          console.error(err)
        }
      }
    },
    async fetchCampaigns() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}campaigns`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        this.listCampaigns = response.data.data
        // console.log('Fetched campaigns:', this.campaigns);
      } catch (err) {
        this.error = 'Failed to fetch data'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    reloadPageDetailCampaign() {
      this.campaigns.id = ''
      this.fetchData()
    },
    formatRupiah(amount) {
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      })
      return formatter.format(amount)
    },
    async donate() {
      const campaignId = this.$route.params.id
      const amount = this.filled.nominal
      const token = localStorage.getItem('token')

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_API}donate`,
          {
            campaign_id: campaignId,
            amount: amount
          },
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        this.paymentLink = response.data.data.payment_link
        console.log('Donation successful:', response.data)
        console.log('Apa isi dari paymentLink:', this.paymentLink)
        window.location = this.paymentLink
      } catch (error) {
        console.error('Error donating:', error)
      }
    }
  }
}
</script>

<template>
  <body class="mx-auto">
    <div class="background-full">
      <div class="bg-image">
        <img class="img-fluid" :src="campaigns.campaign_image_url" alt="background-img" />
        <div class="mask" style="background-color: hsla(0, 0%, 0%, 0.4)"></div>
      </div>

      <div class="container container-full px-4">
        <div class="col-2 go-back">
          <img @click="goBack" class="pointer" src="/src/assets/arrow-left.svg" alt="arrow" />
        </div>
        <div class="title-donation">
          <div>
            <h1>{{ campaigns.title }}</h1>
          </div>
          <div>
            <p>{{ campaigns.location }}</p>
          </div>
        </div>

        <div class="container container-card rounded-4">
          <p class="title-card">Tentang</p>
          <p class="title-content">
            {{ campaigns.description }}
          </p>
          <p class="donation-need">Dibutuhkan: {{ formatRupiah(campaigns.goal_amount) }}</p>
          <div class="progress">
            <div
              class="progress-bar warna-progress rounded-4"
              role="progressbar"
              :style="{ width: campaigns.percentage_value + '%' }"
              :aria-valuenow="campaigns.percentage_value"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="total-donasi">
            <p class="text-muted">
              Terkumpul
              <span class="text-donasi">{{ formatRupiah(campaigns.current_amount) }}</span>
            </p>
          </div>
          <form id="donationForm" action="">
            <div class="form-group">
              <label for="inputNominal" class="title-nominal">Nominal</label>
              <input
                type="text"
                class="form-control nominal-amount rounded"
                id="inputNominal"
                placeholder="Masukan Nominal Donasi"
                v-model="filled.nominal"
              />
            </div>
          </form>
        </div>
        <swiper-container space-between="60" slides-per-view="1" navigation="true" loop="true">
          <swiper-slide v-for="campaignItem in listCampaigns" :key="campaignItem.id">
            <CardDonasi @click.native="goToDetail(campaignItem.id)" :payload="campaignItem" />
          </swiper-slide>
        </swiper-container>
        <div class="mx-auto d-grid sumbang-button pb-4">
          <button
            class="btn button-sumbang text-wrap"
            type="submit"
            form="donationForm"
            @click.prevent="donate"
          >
            Sumbangkan Sekarang!
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  max-width: 576px;
  background-color: #fafafa;
  height: 100dvh;
}
.background-full {
  background-color: #fafafa;
}

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
  z-index: 2;
}

.progress {
  margin-bottom: 16px;
}

.progress-bar {
  width: 50%;
}
.container-card .progress .progress-bar.warna-progress {
  color: #00bf99;
  background-color: #00bf99;
}

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
  font-weight: normal;
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
