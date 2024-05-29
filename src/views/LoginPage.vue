<template>
  <body class="mx-auto shadow">
    <div class="container container-atas">
      <div class="title-login">
        <h2>Hello👋</h2>
        <p>Selamat datang di Sumbangan</p>
      </div>

      <!-- Login Form -->

      <form class="d-grid" @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Masukkan email"
            v-model="filled.email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Kata Sandi</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Masukkan password"
            v-model="filled.password"
          />
        </div>
        <div class="mb-5 text-end">
          <a href="#" class="green-text">Lupa Password?</a>
        </div>
        <button type="submit" class="btn login-button">Masuk</button>
      </form>
      <p class="text-center register-text">
        <span>Belum punya akun?</span>
        <RouterLink to="/daftar" class="green-text">Daftar</RouterLink>
      </p>
    </div>

    <RouterView />
  </body>
</template>

<script>
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'LoginPage',

  data() {
    return {
      filled: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login() {
      console.info('login')

      try {
        const response = await axios.post(import.meta.env.VITE_APP_API + 'auth/login', {
          email: this.filled.email,
          password: this.filled.password
        })

        const data = response.data.data
        localStorage.setItem('token', data.access_token)

        localStorage.setItem('user_id', data.user_id)
        this.$router.replace('/')
      } catch (error) {
        if (error.response) {
          const data = error.response.data
          console.log(data)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
      }
    }
  }
}
</script>

<style scoped>
body {
  background-color: #fafafa;
  max-width: 576px;
  height: 100dvh;
}
.form-control::placeholder {
  opacity: 0.5;
}

.container-atas {
  padding-top: 88.8px;
}

.form-login {
  margin-top: 48.38px;
}

.green-text {
  color: #00a991;
  text-decoration: none;
}

.login-button {
  background-color: #009a84;
  color: white;
}

.title-login h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-style: normal;
}
.title-login p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.btn {
  margin-bottom: 39px;
}
</style>
