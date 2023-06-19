import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/users",
    name: "user",
    component: () => import("../views/UsersView.vue"),
  },

  /* 
  BULUNAYAMAN BUTUN SAYFALAR ICIN HATA SAYFASINA YONLENDIRIR
 {
    path:'/:noFound',
    name:'NotFound',
    component:()=>import("../views/ErrorView.vue")
  },
  */
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("../views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
