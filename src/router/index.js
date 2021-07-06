import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/workbench',
        name: 'Workbench',
        component: () => import(/* webpackChunkName: "index" */ '../views/WorkBench.vue')
      },
      {
        path: '/me',
        name: 'Me',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "index" */ '../views/Me.vue')
      }
    ]
  },
  {
    path: '/classList',
    name: 'ClassList',
    component: () => import(/* webpackChunkName: "class" */ '../views/class/List.vue')
  },
  {
    path: '/baseStudentInput',
    name: 'BaseStudentInput',
    component: () => import(/* webpackChunkName: "student" */ '../views/student/BaseStudentInput.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
