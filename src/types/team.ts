export interface Member {
	id: string;
	name: string;
	email: string;
	src: string | null;
	role: "Admin" | "Member";
	status: "Active" | "Invited";
}

export interface TeamOption {
	value: string;
	label: string;
}

export const teamOptions: TeamOption[] = [
	{ value: "eng", label: "Engineering" },
	{ value: "design", label: "Design" },
	{ value: "product", label: "Product" },
	{ value: "marketing", label: "Marketing" },
];