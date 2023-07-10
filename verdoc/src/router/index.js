import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import UploadView from "../pages/UploadView.vue";
import VerifyView from "../pages/VerifyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/upload",
    name: "upload",
    component: UploadView,
  },
  {
    path: "/verify",
    name: "verify",
    component: VerifyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
