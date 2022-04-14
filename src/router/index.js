import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ONama from '../views/ONama.vue'
import Igra from '../views/Igra.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/onama',
		name: 'ONama',
		component: ONama
	},
	{
		path: '/igra',
		name: 'Igra',
		component: Igra
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
