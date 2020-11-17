import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/area",
    name: "Area",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Area.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: () => import(/* webpackChunkName: "button" */ "../views/Buttons.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
