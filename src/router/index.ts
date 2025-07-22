import { createRouter, createWebHistory } from 'vue-router'

interface RouteMeta extends Record<symbol | string, unknown> {
  title: string
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    footer?: boolean
    isContainer?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'main',
      meta: <RouteMeta>{
        title: 'Пластический хируг',
        isContainer: false
      },
      component: () => import('@/pages/MainPage/MainPage.vue')
    },
    {
      path: '/plastic',
      name: 'plastic',
      redirect: { name: 'plastic/body' },
      component: () => import('@/pages/PlasticPage/PlasticPage.vue'),
      meta: {
        isContainer: true
      },
      children: [
        {
          path: 'body',
          name: 'plastic/body',
          meta: <RouteMeta>{
            title: 'Пластика тела'
          },
          component: () => import('@/pages/PlasticPage/PlasticBodyPage/PlasticBodyPage.vue')
        },
        {
          path: 'face',
          name: 'plastic/face',
          meta: <RouteMeta>{
            title: 'Пластика лица'
          },
          component: () => import('@/pages/PlasticPage/PlasticFacePage/PlasticFacePage.vue')
        },
        {
          path: 'mammo',
          name: 'plastic/mammo',
          meta: <RouteMeta>{
            title: 'Пластика груди'
          },
          component: () => import('@/pages/PlasticPage/PlasticMamoPage/PlasticMamoPage.vue')
        },
        {
          path: 'preparation',
          name: 'plastic/preparation',
          meta: <RouteMeta>{
            title: 'Подготовка к операции'
          },
          component: () => import('@/pages/PlasticPage/PrepareOperationPage/PrepareOperationPage.vue')
        }
      ]
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      meta: <RouteMeta>{
        title: 'Мои работы',
        isContainer: true
      },
      component: () => import('@/pages/PortfolioPage/PortfolioPage.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      meta: <RouteMeta>{
        title: 'Запись на прием',
        isContainer: true
      },
      component: () => import('@/pages/AppointmentPage/AppointmentPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      redirect: { name: 'appointment' }
    },
    {
      path: '/about',
      name: 'about',
      meta: <RouteMeta>{
        title: 'Обо мне',
        isContainer: true
      },
      component: () => import('@/pages/AboutPage/AboutPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Страница не найдена',
      meta: {
        isContainer: true
      },
      component: () => import('@/pages/NotFoundPage/NotFoundPage.vue')
    }
  ]
})

router.beforeEach(to => {
  document.title = (to.meta.title as string) || 'Пластическая хирургия'
})

export default router
