import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/dashboard',
      name:'dashboard',
      redirect:'/home'
    },
    {
      path: '/',
      component: () => import('@/views/Dashboard/index.vue'),
      redirect:'/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'testPage1',
          name: 'testPage1',
          component: () => import('@/views/TestPage1/index.vue')
        },
        {
          path: 'testPage2',
          name: 'testPage2',
          component: () => import('@/views/TestPage2/index.vue')
        },
        {
          path: 'testPage3',
          name: 'testPage3',
          component: () => import('@/views/TestPage3/index.vue')
        },
        {
          path: 'testPage4',
          name: 'testPage4',
          component: () => import('@/views/TestPage4/index.vue')
        },
        {
          path: 'testPage5',
          name: 'testPage5',
          component: () => import('@/views/TestPage5/index.vue')
        },

      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  //前置守卫,判断是否登录
  if (to.path === '/login') {
    next()
  } else {
    if (localStorage.getItem('accessToken')) {
      // 已登录
      next()
    }else{
      next('/login')
    }
  }
})


// router.router.beforeEach((to, from, next) => {
  
// })

export default router
