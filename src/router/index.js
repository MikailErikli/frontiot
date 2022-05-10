import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/objet/:ObjetId",
    name: "objet",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page-objet.vue"),
  },
  {
    path: "/",
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
