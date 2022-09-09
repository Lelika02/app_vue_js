import { createRouter, createWebHistory } from 'vue-router'
import MaHome from '@/views/MaHome'
import MyDetails from '@/views/MyDetails'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          name: 'accueil',
          path: '/',
          component: MaHome
        },
        {
          name: 'details',
          path: '/details/:id/:titre',
          component: MyDetails,
          props: true
        }
    ]
})

export default router;