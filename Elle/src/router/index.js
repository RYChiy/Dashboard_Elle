import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Homepage from "../views/Homepage.vue"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/nav',
			component: Home
		},
		
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
	],
})

export default router