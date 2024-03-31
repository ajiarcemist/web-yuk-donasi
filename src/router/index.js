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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      path: '/detail',
      name: 'detail',
      component: DetilPage
    },
    {
      path: '/donasi-gagal',
      name: 'donasiGagal',
      component: DonasiGagal
    },
    {
      path: '/donasi-progress',
      name: 'donasiProgress',
      component: DonasiProgress
    },
    {
      path: '/donasi-sukses',
      name: 'donasisukses',
      component: DonasiSukses
    },
    {
      path: '/history-donasi',
      name: 'historyDonasi',
      component: HistoryDonasi
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    }
  ]
})

export default router
