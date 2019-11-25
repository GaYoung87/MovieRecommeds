import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import MovieDetail from '@/views/MovieDetail'
import ActorDetail from '@/views/ActorDetail'
import AdminPage from '@/views/AdminPage'
import DirectorDetail from '@/views/DirectorDetail'
import CreateRecommend from '@/views/CreateRecommend'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/movie/:movie_id',
    name: 'movieDetail',
    component: MovieDetail
  },
  {
    path: '/actor/:actor_id',
    name: 'actorDetail',
    component: ActorDetail
  },
  {
    path: '/director/:director_id',
    name: 'directorDetail',
    component: DirectorDetail
  },
  {
    path: '/createRecommend',
    name: 'createRecommend',
    component: CreateRecommend
  },
  {
    path: '/adminPage',
    name: 'adminPage',
    component: AdminPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
