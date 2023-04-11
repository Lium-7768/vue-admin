import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import Layout from "../pages/Layout.vue";

export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: () => Layout,
    },
  ],
});
