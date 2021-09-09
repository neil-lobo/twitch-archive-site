import Vue from 'vue'
import VueRouter from 'vue-router'
import Vods from "@/views/Vods.vue"
import ChannelVods from "@/views/ChannelVods.vue"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/vods" },
  { path: "/vods", component: Vods },
  { path: "/vods/:id", component: ChannelVods}
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
