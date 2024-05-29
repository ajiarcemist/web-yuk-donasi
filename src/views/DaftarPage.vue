<template>
  <body class="mx-auto shadow">
    <div class="container container-atas">
      <div>
        <h2>Hai👋</h2>
        <p>Yuk daftarkan akunmu!</p>
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
            <label for="exampleInputNama" class="form-label">Nama</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputNama"
              placeholder="Masukkan nama"
              v-model="filled.name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Kata Sandi</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Masukkan kata sandi"
              v-model="filled.password"
            />
          </div>

          <button type="submit" class="btn login-button my-4" @click.prevent="register()">
            Daftar
          </button>
        </form>
        <p class="text-center">
          <span class="text-muted">Udah punya akun?</span>
          <RouterLink to="/login" class="green-text">Masuk</RouterLink>
        </p>
      </div>
    </div>
  </body>
  <RouterView />
</template>

<script>
import axios from 'axios'
import { RouterLink, RouterView, useRouter } from 'vue-router'

export default {
  name: 'daftarPage',
  data() {
    return {
      filled: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(import.meta.env.VITE_APP_API + 'auth/register', {
          name: this.filled.name,
          email: this.filled.email,
          password: this.filled.password
        })
        const data = response.data
        console.info(data)

        this.router.push({ name: 'daftar-success' })
      } catch (err) {
        const data = err.response.data
        console.info(data)
      }
    }
  },
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
body {
  max-width: 576px;
  background-color: #fafafa;
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

p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
}
h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
}
</style>
