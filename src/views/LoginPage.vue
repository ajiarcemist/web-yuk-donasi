<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'LoginPage',
  
  data() {
    return {
      filled: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    login() {
      console.info('login');
      axios.post(import.meta.env.VITE_APP_API + '/auth/login', {
        email: this.filled.email,
        password: this.filled.password,
      }).then((resp) => {
        const data = resp.data.data;
        localStorage.setItem('token', data.access_token);
        this.$router.replace('/');
      }).catch((err) => {
        const data = err.response.data;
        // tampilkan pesan error berupa modal
      })
    }
  }
}

</script>
<template>
  <body class="mx-auto shadow">
    <div class="container container-atas">
      <div class="title-login">
        <h2>Hello👋</h2>
        <p>Selamat datang di Sumbangan</p>
      </div>
      <!-- Login Form -->
      <div class="form-login">
        <form class="d-grid">
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
          <button type="submit" class="btn login-button" @click.prevent="login()">Masuk</button>
        </form>
        <p class="text-center register-text">
          <span>Belum punya akun?</span>
          <RouterLink to="/daftar" class="green-text">Daftar</RouterLink>
        </p>
      </div>
    </div>
    <RouterView />
  </body>
</template>
<style scoped>
/* Gaya CSS dari main.css */

/* Placeholder teks */
body {
  background-color: #fafafa;
  max-width: 576px;
  height: 100dvh;
}
.form-control::placeholder {
  opacity: 0.5;
}

/* Margin atas untuk container */
.container-atas {
  padding-top: 88.8px;
}

/* Margin atas untuk form login */
.form-login {
  margin-top: 48.38px;
}

/* Warna teks untuk tautan hijau */
.green-text {
  color: #00a991;
  text-decoration: none;
}

/* Gaya tombol masuk */
.login-button {
  background-color: #009a84;
  color: white;
}

/* Gaya tambahan untuk judul dan teks */
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
