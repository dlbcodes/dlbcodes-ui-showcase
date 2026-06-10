import { ref, watch } from "vue";

export type Theme = "lattice" | "ember" | "pine";

export interface BrandInfo {
	name: string;
	tagline: string;
}

const THEMES: Record<Theme, BrandInfo> = {
	lattice: { name: "Lattice", tagline: "Structure for ambitious teams." },
	ember: { name: "Ember", tagline: "Move fast, stay warm." },
	pine: { name: "Pine", tagline: "Calm, focused work." },
};

const current = ref<Theme>("lattice");

const apply = (theme: Theme): void => {
	document.documentElement.setAttribute("data-theme", theme);
};

watch(current, apply, { immediate: true });

export const useTheme = () => ({
	current,
	themes: THEMES,
	setTheme: (t: Theme): void => {
		current.value = t;
	},
	brand: () => THEMES[current.value],
});