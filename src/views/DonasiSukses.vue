<script>
import axios from '../interceptors/axios'
import { useRouter } from 'vue-router'

export default {
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
        const transactionId = this.$route.params.id
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}campaigntransactions/detail/${transactionId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )
        this.campaigns = response.data.data
        console.log('Fetched campaigns:', this.campaigns)

        this.campaigns.amount = this.formatRupiah(this.campaigns.amount)
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
    },
    formatDate(date) {
      const parsedDate = new Date(date)

      const formatter = new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      return formatter.format(parsedDate)
    }
  },
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<template>
  <body class="mx-auto shadow">
    <div class="banner pb-4">
      <div class="container pt-4 mb-3 px-4">
        <div class="row">
          <div class="col-2 go-back">
            <img @click="goBack" class="pointer" src="/src/assets/arrow-left.svg" alt="arrow" />
          </div>
          <div class="col-8 text-center">
            <h4 class="title-banner">Informasi Donasi</h4>
          </div>
        </div>
        <div class="img-banner text-center mt-4">
          <img src="/src/assets/white-check.svg" alt="white-check" />
        </div>
        <div>
          <h4 class="text-center mt-3 desc-banner">Berhasil Melakukan Donasi</h4>
        </div>
        <div>
          <h1 class="text-center mt-5 nominal-banner">{{ campaigns.amount }}</h1>
        </div>
        <div>
          <p class="text-center mt-3 confirm-banner">
            Terkonfirmasi {{ campaigns.confirmed_date }}
          </p>
        </div>
      </div>
    </div>
    <div class="container info-donasi">
      <div><h6 class="mt-5 pb-2">Informasi Donasi</h6></div>
      <div class="row justify-content-end">
        <div class="col-6"><p class="text-muted text-start">Campaign</p></div>
        <div class="col-6">
          <p class="text-muted text-end">{{ campaigns.title }}</p>
        </div>
      </div>
      <div><h6 class="mt-4 pb-2">Informasi Transaksi</h6></div>
      <div class="row justify-content-end">
        <div class="col-6">
          <p class="text-muted text-start">No Transaksi</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">{{ campaigns.transacton_id }}</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-6"><p class="text-muted text-start">Tanggal</p></div>
        <div class="col-6">
          <p class="text-muted text-end">{{ formatDate(campaigns.date) }}</p>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-color: #fafafa;
  overflow: auto;
  height: 100dvh;
  max-width: 576px;
}
.banner {
  background: #00a991;
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
.pointer {
  cursor: pointer;
}
</style>
