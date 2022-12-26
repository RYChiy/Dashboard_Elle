import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/LogIn.vue";
import Homepage from "../views/homepage.vue"
const routes = [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  {
    path: "/h",
    name: "Homepage",
    component: Homepage
  }]

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
      });
    export default router;