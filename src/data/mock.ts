export interface Workspace {
	id: string;
	name: string;
	plan: "Free" | "Pro" | "Enterprise";
}

export const workspaces: Workspace[] = [
	{ id: "1", name: "Acme Inc", plan: "Enterprise" },
	{ id: "2", name: "Personal", plan: "Free" },
	{ id: "3", name: "Side Project", plan: "Pro" },
];

export interface Metric {
	label: string;
	value: string;
	change: string;
	trend: "up" | "down";
}

export const metrics: Metric[] = [
	{ label: "Total revenue", value: "$48,290", change: "+12.5%", trend: "up" },
	{ label: "Active users", value: "2,847", change: "+8.2%", trend: "up" },
	{ label: "Projects", value: "184", change: "+3", trend: "up" },
	{ label: "Churn rate", value: "1.2%", change: "-0.4%", trend: "down" },
];

export interface Activity {
	id: number;
	user: string;
	img: string;
	action: string;
	time: string;
}

export const activity: Activity[] = [
	{ id: 1, user: "Sarah Chen", img: "https://i.pravatar.cc/120?img=2", action: "created a new project", time: "2m ago" },
	{ id: 2, user: "Marcus Lee", img: "https://i.pravatar.cc/120?img=6", action: "upgraded to Pro", time: "1h ago" },
	{ id: 3, user: "Ana Torres", img: "https://i.pravatar.cc/120?img=3", action: "invited 3 team members", time: "3h ago" },
	{ id: 4, user: "James Park", img: "https://i.pravatar.cc/120?img=8", action: "completed onboarding", time: "5h ago" },
];

export const currentUser = {
	name: "Daniel Lobo",
	email: "daniel@example.com",
	img: "https://i.pravatar.cc/120?img=2"
};