export interface NavItem {
	label: string;
	href: string;
	disabled?: boolean;
}

export interface NavSection {
	title: string;
	soon?: boolean;
	items: NavItem[];
}

// Top nav (header) — real, working links only
export const marketingNav: NavItem[] = [
	{ label: "Features", href: "/#features" },
	{ label: "Pricing", href: "/pricing" },
];

// Footer columns — richer, with some "coming soon" placeholders
export const footerNav: NavSection[] = [
	{
		title: "Product",
		items: [
			{ label: "Features", href: "/#features" },
			{ label: "Pricing", href: "/pricing" },
		],
	},
	{
		title: "Company",
		soon: true,
		items: [
			{ label: "About", href: "#", disabled: true },
			{ label: "Blog", href: "#", disabled: true },
			{ label: "Careers", href: "#", disabled: true },
		],
	},
];