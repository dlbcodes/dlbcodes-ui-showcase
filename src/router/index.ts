import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import MarketingLayout from "../layouts/MarketingLayout.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
// import SettingsView from "../views/dashboard/SettingsView.vue";

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
		{
			path: "/dashboard",
			component: DashboardLayout,
			children: [
				{ path: "", name: "dashboard", component: () => import("../views/dashboard/OverviewView.vue") },
				{ path: "settings", name: "dashboard-settings", component: () => import("../views/dashboard/SettingsView.vue") },
				{ path: "team", name: "dashboard-team", component: () => import("../views/dashboard/TeamView.vue") },
			],
		},
	],
});