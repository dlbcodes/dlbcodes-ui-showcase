import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import MarketingLayout from "../layouts/MarketingLayout.vue";

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: MarketingLayout,
			children: [
				// homepage will go here later as the index
				{ path: "pricing", name: "pricing", component: () => import("../views/marketing/PricingView.vue") },
			],
		},
		{
			path: "/",
			component: AuthLayout,
			children: [
				{ path: "login", name: "login", component: () => import("../views/auth/LoginView.vue") },
				{ path: "signup", name: "signup", component: () => import("../views/auth/SignupView.vue") },
			],
		},
	],
});