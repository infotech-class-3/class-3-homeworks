import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ErrorView from '../views/ErrorView.vue';
import UsersView from '../views/UsersView.vue';

const routes = [
  {
    path: "/",
    component:HomeView,
  },
  {
    path: "/about",
    component:AboutView,
  },
  {
    path: "/users",
    component:UsersView,
  },
  {
    path:"/:pathMatch(.*)*",
    component: ErrorView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
