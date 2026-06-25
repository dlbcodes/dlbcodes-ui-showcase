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
				{ path: "", name: "home", component: () => import("../views/marketing/HomeView.vue") },
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
				{ path: "", name: "dashboard", component: () => import("../views/dashboard/OverviewView.vue"), meta: { title: "Overview" } },
				{ path: "team", name: "dashboard-team", component: () => import("../views/dashboard/TeamView.vue"), meta: { title: "Team" } },
				{ path: "settings", name: "dashboard-settings", component: () => import("../views/dashboard/SettingsView.vue"), meta: { title: "Settings" } },
				{ path: "projects", name: "dashboard-projects", component: () => import("../views/dashboard/ProjectsView.vue"), meta: { title: "Projects" } },
			],
		},
	],
});