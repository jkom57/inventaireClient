import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // Liste.html
      name: "home",
      component: HomeView,
    },
    {
      path: "/produit/:id", // Produit.html
      name: "produit",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProduitView.vue"),
    },
    {
      path: "/ajout", // Ajout.html
      name: "ajout",
      component: () => import("../views/AjoutView.vue"),
    },
    {
      path: "/modification/:id", // Ajout.html
      name: "modification",
      component: () => import("../views/ModificationView.vue"),
    },
  ],
});

export default router;
