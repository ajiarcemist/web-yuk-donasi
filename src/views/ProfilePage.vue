<script>
import axios from '../interceptors/axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { format } from 'date-fns'

export default {
  setup() {
    const router = useRouter()
    const profileData = ref({})

    const goBack = () => {
      router.back()
    }

    const handleLogout = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_APP_API}auth/logout`,
          {},
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )

        localStorage.removeItem('token')
        router.push('/login')
      } catch (error) {
        console.error('Failed to log out:', error)
      }
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_API + 'users/profile', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        const data = response.data.data

        data.registered_date = format(new Date(data.registered_date), 'yyyy-MM-dd')
        profileData.value = data
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      }
    }

    onMounted(fetchProfile)

    return {
      goBack,
      profileData,
      handleLogout
    }
  }
}
</script>

<template>
  <body class="mx-auto shadow">
    <!-- card daftar donasi -->
    <div class="banner pb-2">
      <div class="container pt-4 mb-3 px-4">
        <div class="d-flex justify-content-between">
          <div class="go-back pointer">
            <img @click="goBack" src="/src/assets/black-arrow.svg" alt="arrow" />
          </div>

          <div @click="handleLogout" class="pointer">
            <img src="/src/assets/sign-out-alt.svg" alt="sign-out" />
          </div>
        </div>

        <div class="img-banner text-center mt-4">
          <img class="rounded-circle" :src="profileData.avatar_img_url" alt="white-check" />
        </div>
        <div>
          <h4 class="text-center mt-5 desc-banner">{{ profileData.name }}</h4>
        </div>
        <div>
          <p class="text-center email-banner mt-4">{{ profileData.email }}</p>
        </div>
        <div>
          <p class="text-center phone-banner">{{ profileData.phone }}</p>
        </div>
      </div>
    </div>
    <div class="container info-donasi">
      <div class="row mt-5 pb-2">
        <div class="col-6">
          <h6 class="text-start">Informasi Donasi</h6>
        </div>
        <div class="col-6 text-end">
          <img src="/src/assets/pen.svg" alt="pen" />
        </div>
      </div>

      <div class="row justify-content-end mt-5">
        <div class="col-6">
          <p class="text-muted text-start">Total Donasi</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">{{ profileData.total_donation }}</p>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-6">
          <p class="text-muted text-start">Tanggal Terdaftar</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">{{ profileData.registered_date }}</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-6 justify-content-end">
          <p class="text-muted text-start">Status Akun</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">{{ profileData.status }}</p>
        </div>
      </div>
      <hr class="text-muted" />
      <div class="row justify-content-end">
        <div class="col-6 justify-content-end">
          <p class="text-muted text-start">Hubungi Kami</p>
        </div>
        <div class="col-6">
          <p class="text-muted text-end">Lihat</p>
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
  background: #fafafa;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: black;
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
.email-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.phone-banner {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-top: -15px;
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
