import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProduitView from "../views/ProduitView.vue";
import AjoutView from "../views/AjoutView.vue";
import ModificationView from "../views/ModificationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // Liste.html
      name: "home",
      component: HomeView,
      props: true,
    },
    {
      path: "/produit/:id", // Produit.html
      name: "produit",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProduitView,
      props: true,
    },
    {
      path: "/ajout", // Ajout.html
      name: "ajout",
      component: AjoutView,
      props: true,
    },
    {
      path: "/modification/:id", // Ajout.html
      name: "modification",
      component: ModificationView,
      props: true,
    },
  ],
});

export default router;
