import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/homepage.vue"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomePage
		},
		
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
	],
})

export default router