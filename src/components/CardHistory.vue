<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <div v-for="transaction in transactions" :key="transaction.id" @click="allowRouteAccess">
        <RouterLink :to="getRouterLink(transaction.status, transaction.id)" class="router-link">
          <div class="card mb-3 card-history border-0 rounded-4">
            <div class="row">
              <div class="col-3 my-auto img-card">
                <img
                  :src="transaction.campaign_img_url"
                  class="img-fluid rounded-4 history-img"
                  alt="cover-daftar"
                />
              </div>
              <div class="col-7 left-content-card">
                <div class="card-body body-card-history">
                  <h5 class="card-title">{{ transaction.title }}</h5>
                  <p class="card-text">{{ transaction.location }}</p>
                </div>
              </div>
              <div class="col-2">
                <img :src="getStatusIcon(transaction.status)" alt="checkmark" class="mx-auto" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import checkLogo from '../assets/check.svg';
import crossLogo from '../assets/cross.svg';
import flagLogo from '../assets/flag.svg';

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      transactions: [],
      loading: true,
      error: null,

      checkLogo,
      crossLogo,
      flagLogo,
    }
  },
  created() {
    this.fetchCampaignTransactions()
  },
  methods: {
    async fetchCampaignTransactions() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}campaigntransactions/${localStorage.getItem('user_id')}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )
        this.transactions = response.data.data
      } catch (error) {
        if (
          error.response &&
          error.response.status === 401 &&
          error.response.data.meta.status === 'TOKEN_EXPIRED'
        ) {
          console.log('Token expired. Clearing local storage...')
          localStorage.removeItem('token')
          localStorage.removeItem('user_id')
          this.error = 'Token expired. Please log in again.'
        } else {
          this.error = 'Failed to fetch campaign transactions'
          console.error('Failed to fetch campaign transactions:', error)
        }
      } finally {
        this.loading = false
      }
    },
    getRouterLink(status, id) {
      if (status === 'success') {
        return `/donasi-sukses/${id}`
      } else if (status === 'pending') {
        return `/donasi-progress/${id}`
      } else {
        return `/donasi-gagal/${id}`
      }
    },
    getStatusIcon(status) {
      if (status === 'success') {
        return checkLogo;
      } else if (status === 'pending') {
        return flagLogo;
      } else {
        return crossLogo;
      }
    }
  }
}
</script>

<style scoped>
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

.router-link {
  text-decoration: none;
}

/* Adjust margin for better alignment */
</style>
