import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/LogIn.vue";
const routes = [
    {
      path: "/",
      name: "login",
      component: Login,
    }]

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
      });
    export default router;