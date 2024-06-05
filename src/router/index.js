import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DaftarPage from '@/views/DaftarPage.vue'
import DaftarBerhasil from '@/views/DaftarBerhasil.vue'
import DetilPage from '@/views/DetilPage.vue'
import DonasiGagal from '@/views/DonasiGagal.vue'
import DonasiProgress from '@/views/DonasiProgress.vue'
import DonasiSukses from '@/views/DonasiSukses.vue'
import HistoryDonasi from '@/views/HistoryDonasi.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import DonasiBerhasil from '@/views/DonasiBerhasil.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { auth: true }
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: DaftarPage
    },
    {
      path: '/daftar-success',
      name: 'daftar-success',
      component: DaftarBerhasil
    },
    {
      path: '/donasi-berhasil',
      name: 'donasi-berhasil',
      component: DonasiBerhasil,
      meta: { auth: true }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetilPage,
      meta: { auth: true }
    },
    {
      path: '/donasi-gagal/:id',
      name: 'donasiGagal',
      component: DonasiGagal,
      meta: { auth: true }
    },
    {
      path: '/donasi-progress/:id',
      name: 'donasiProgress',
      component: DonasiProgress,
      meta: { auth: true }
    },
    {
      path: '/donasi-sukses/:id',
      name: 'donasisukses',
      component: DonasiSukses,
      meta: { auth: true }
    },
    {
      path: '/history-donasi',
      name: 'historyDonasi',
      component: HistoryDonasi,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: { auth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')

  if (to.matched.some((record) => record.meta.auth)) {
    if (!isAuthenticated) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    if (
      isAuthenticated &&
      (to.name === 'loginPage' || to.name === 'daftar' || to.name === 'daftar-success')
    ) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

export default router
