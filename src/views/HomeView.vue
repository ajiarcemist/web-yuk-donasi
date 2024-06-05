<template>
  <body class="mx-auto shadow">
    <FooterNav />
    <!-- me -->
    <div class="container">
      <div class="title-content">
        <div class="row">
          <div class="col-8">
            <div class="title-main">
              <h1>Howdy,<br />{{ users.name }}</h1>
            </div>
            <p class="title-desc text-muted">Sudah berbuat baik hari ini?</p>
          </div>

          <div class="col-4">
            <img :src="users.avatar_url" alt="avatar" class="avatar" />
          </div>
        </div>
        <swiper-container space-between="60" slides-per-view="1" navigation="true" loop="true">
          <swiper-slide v-for="campaignItem in listCampaigns" :key="campaignItem.id">
            <CardDonasi @click="goToDetail(campaignItem.id)" :payload=campaignItem />
          </swiper-slide>
        </swiper-container>

        <!-- history donasi-->
        <p class="history-donasi">Donasi Anda</p>
        <!-- Konten history donasi -->

        <div v-if="loading">
          <p>Loading...</p>
        </div>
        <div v-else-if="error">
          <p>{{ error }}</p>
        </div>
        <div v-else>
          <div
            v-for="campaign in campaigns"
            :key="campaign.id"
            class="card mb-3 card-history border-0 rounded-4"
          >
            <div class="row">
              <div class="col-3 my-auto img-card">
                <img
                  :src="campaign.campaign_image_url"
                  class="img-fluid rounded-4 history-img"
                  :alt="campaign.title"
                />
              </div>
              <div class="col-9 left-content-card">
                <div class="card-body body-card-history">
                  <h5 class="card-title">{{ campaign.title }}</h5>
                  <p class="card-text">{{ campaign.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import CardDonasi from '@/components/CardDonasi.vue'
import FooterNav from '@/components/FooterNav.vue'
import axios from 'axios'

export default {
  components: {
    CardDonasi,
    FooterNav
  },
  data() {
    return {
      users: {},
      campaigns: [],
      listCampaigns: [],
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchDataCampaign()
    this.fetchDataUser()
    this.fetchListCampaigns()
  },
  methods: {
    goToDetail(id) {
      this.$router.push('/detail/' + id);
    },
    async fetchListCampaigns() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}campaigns`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        this.listCampaigns = response.data.data
        // console.log('Fetched campaigns:', this.campaigns)
      } catch (err) {
        this.error = 'Failed to fetch data'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async fetchDataUser() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}users`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        this.users = response.data.data
        console.log('Fetched user:', this.users)
      } catch (err) {
        if (
          err.response &&
          err.response.status === 401 &&
          err.response.data.meta.status === 'TOKEN_EXPIRED'
        ) {
          console.log('Token expired. Clearing local storage...')
          localStorage.removeItem('token')
          localStorage.removeItem('user_id')
          this.error = 'Token expired. Please log in again.'
        } else {
          this.error = 'Failed to fetch user data'
          console.error(err)
        }
      }
    },
    async fetchDataCampaign() {
      try {
        const userId = localStorage.getItem('user_id')
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}campaigns/history/${userId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )
        this.campaigns = response.data.data.slice(0, 4)
        console.log('Fetched campaigns:', this.campaigns)
        this.loading = false
      } catch (err) {
        if (
          err.response &&
          err.response.status === 401 &&
          err.response.data.meta.status === 'TOKEN_EXPIRED'
        ) {
          console.log('Token expired. Clearing local storage...')
          localStorage.removeItem('token')
          localStorage.removeItem('user_id')
          this.error = 'Token expired. Please log in again.'
        } else {
          this.error = 'Failed to fetch campaign data'
          console.error(err)
          this.loading = false
        }
      }
    }
  }
}
</script>

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
