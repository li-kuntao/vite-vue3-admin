import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloWorld',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_UR),
  routes
})

export default router
