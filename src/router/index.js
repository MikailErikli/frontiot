import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index-test.vue"),
  },
  {
    path: "/connexion",
    name: "connexion",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/connexion.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
