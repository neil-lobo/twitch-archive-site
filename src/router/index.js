import Vue from 'vue'
import VueRouter from 'vue-router'
import Vods from "@/views/Vods.vue"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/vods" },
  { path: "/vods", component: Vods }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
