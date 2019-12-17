export default [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */'@/pages/login'),
      meta: { title: '登录' }
    }
]