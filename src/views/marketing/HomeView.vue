<script setup lang="ts">
import { Badge, Button, Panel, PanelContent } from "@dlbcodes/my-design-system";
import {
    PhPalette,
    PhKeyboard,
    PhStack,
    PhWind,
    PhBracketsCurly,
    PhPuzzlePiece,
} from "@phosphor-icons/vue";

const features = [
    {
        icon: PhPalette,
        title: "Tokenized by design",
        details:
            "Every component is built on semantic CSS-variable tokens. Restyle the whole system by overriding tokens, with no component edits and no specificity wars.",
    },
    {
        icon: PhKeyboard,
        title: "Accessible out of the box",
        details:
            "Overlays, menus, tabs, and dialogs are built on Headless UI, so focus management, keyboard navigation, and ARIA wiring come handled, not bolted on.",
    },
    {
        icon: PhStack,
        title: "Composable, not configurable",
        details:
            "Compound components like Select, Tabs, and Modal expose their parts (Trigger, Content, Item), so you compose the markup you need instead of wrestling a monolith of props.",
    },
    {
        icon: PhWind,
        title: "Tailwind v4 native",
        details:
            "Ships its tokens and source for your Tailwind build to scan. Utilities resolve against your config, classes tree-shake, and there's no precompiled CSS to override.",
    },
    {
        icon: PhBracketsCurly,
        title: "Typed and predictable",
        details:
            "Written in TypeScript with explicit prop interfaces and class-variance-authority variants, so editor autocomplete and type-checking guide every usage.",
    },
    {
        icon: PhPuzzlePiece,
        title: "Standalone or wired",
        details:
            "Form controls work on their own, or drop them in a Field to auto-wire labels, descriptions, errors, and the ARIA between them. Your choice, per use.",
    },
];
</script>

<template>
    <div class="mx-auto flex max-w-6xl flex-col gap-y-20 px-6 py-16">
        <!-- Hero -->
        <div class="flex flex-col items-center gap-y-6 text-center py-16">
            <div class="flex flex-col items-center gap-y-3">
                <Badge>Open Source</Badge>
                <h1
                    class="max-w-3xl font-serif text-5xl tracking-wide text-text-primary"
                >
                    A Vue 3 component library you theme with your own tokens
                </h1>
                <p
                    class="mt-1 max-w-xl font-serif text-2xl tracking-wide text-text-secondary"
                >
                    Accessible, composable components. Change one set of design
                    tokens and the whole system restyles.
                </p>
            </div>
            <div class="flex items-center gap-x-4">
                <Button variant="secondary">View components</Button>
                <Button variant="primary">Get started</Button>
            </div>
        </div>
        <!-- End Hero -->

        <!-- Features -->
        <div class="flex flex-col gap-y-10">
            <!-- Features header -->
            <div class="text-center">
                <h2
                    class="font-serif text-3xl tracking-wide text-text-primary md:text-4xl"
                >
                    Built on principles, not shortcuts
                </h2>
                <p
                    class="mt-1 font-serif text-lg tracking-wide text-text-secondary"
                >
                    A small set of decisions, applied consistently, so the
                    library stays predictable as it grows.
                </p>
            </div>
            <!-- End Features header -->

            <!-- Features grid -->
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Panel v-for="feature in features" :key="feature.title">
                    <PanelContent
                        class="flex h-full flex-col gap-2 rounded-2xl border border-border-subtle bg-bg-raised p-6"
                    >
                        <component
                            :is="feature.icon"
                            class="size-8 text-brand-200"
                            weight="thin"
                            aria-hidden="true"
                        />
                        <h3
                            class="mt-2 font-serif text-xl font-medium text-text-primary"
                        >
                            {{ feature.title }}
                        </h3>
                        <p class="text-sm leading-relaxed text-text-secondary">
                            {{ feature.details }}
                        </p>
                    </PanelContent>
                </Panel>
            </div>
            <!-- End Features grid -->
        </div>
        <!-- End Features -->
    </div>
</template>
