import { createRouter, createWebHistory } from 'vue-router'

interface RouteMeta extends Record<symbol | string, unknown> {
  title: string
}

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    footer?: boolean
    isFluidContainer?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      meta: <RouteMeta>{
        title: 'Пластический хируг',
        isFluidContainer: true
      },
      component: () => import('@/pages/MainPage/MainPage.vue')
    },
    {
      path: '/plastic',
      name: 'plastic',
      redirect: { name: 'plastic/body' },
      component: () => import('@/pages/PlasticPage/PlasticPage.vue'),
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
        }
      ]
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      meta: <RouteMeta>{
        title: 'Мои работы'
      },
      component: () => import('@/pages/PortfolioPage/PortfolioPage.vue')
    },
    {
      path: '/preparation',
      name: 'preparation',
      meta: <RouteMeta>{
        title: 'Подготовка к операции'
      },
      component: () => import('@/pages/PrepareOperationPage/PrepareOperationPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      meta: <RouteMeta>{
        title: 'Контакты',
        footer: false
      },
      component: () => import('@/pages/ContactsPage/ContactsPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: <RouteMeta>{
        title: 'Обо мне'
      },
      component: () => import('@/pages/AboutPage/AboutPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Страница не найдена',
      component: () => import('@/pages/NotFoundPage/NotFoundPage.vue')
    }
  ]
})

router.beforeEach(to => {
  document.title = (to.meta.title as string) || 'Пластическая хирургия'
})

export default router
