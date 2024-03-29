import { createRouter, createWebHistory } from 'vue-router'
import HeaderVue from '@/components/common/Header.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ResumeEditView from '../views/resumes/ResumeEditView.vue'
import ResumeWatchView from '../views/resumes/ResumeWatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeViewVue
    },
    {
      path: '/view-resume/:id',
      name: 'View resume',
      props: true,
      component: ResumeWatchView,
    },
    {
      path: '/create-resume',
      name: 'Create resume',
      props: true,
      component: () => import('../views/resumes/ResumeEditView.vue')
    },
  ]
})

export default router
