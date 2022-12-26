import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/LogIn.vue";
import Homepage from "../views/homepage.vue"
const routes = [
    {
      path: "/",
      name: "login",
      component: Login},
	  
	  {
		path: "/h",
		name: "Homepage",
		component: Homepage
	  },
	  {
		path: '/home',
		component: Home
	},
	{
		path: '/about',
		component: () => import('../views/About.vue')
	},
	]
const router = createRouter({
        history: createWebHashHistory(),
        routes,
	});

export default router