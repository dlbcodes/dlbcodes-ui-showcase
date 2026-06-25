<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "../composables/useTheme";
import BrandMark from "../components/BrandMark.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

const { brand } = useTheme();
const tagline = computed(() => brand().tagline);
</script>

<template>
    <div class="relative flex min-h-screen bg-bg-base">
        <!-- Brand panel (inset card, hidden on small screens) -->
        <div class="hidden w-1/2 p-4 lg:flex">
            <div
                class="relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl bg-brand-200 p-12"
            >
                <RouterLink to="/" class="relative z-10 w-fit">
                    <BrandMark class="[&_span]:text-text-inverse" />
                </RouterLink>

                <div class="relative z-10">
                    <p
                        class="max-w-md text-3xl font-semibold leading-tight text-text-inverse"
                    >
                        {{ tagline }}
                    </p>
                    <p class="mt-4 max-w-md text-text-inverse/70">
                        A reference application built entirely with the design
                        system: fully themeable, accessible, and composed from
                        reusable components.
                    </p>
                </div>

                <p class="relative z-10 text-sm text-text-inverse/60">
                    © 2026, a design system showcase
                </p>

                <!-- subtle decorative grid -->
                <div
                    class="pointer-events-none absolute inset-0 opacity-10"
                    style="
                        background-image:
                            linear-gradient(
                                var(--color-text-inverse) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                var(--color-text-inverse) 1px,
                                transparent 1px
                            );
                        background-size: 40px 40px;
                    "
                ></div>
            </div>
        </div>
        <!-- End Brand panel -->

        <!-- Form area -->
        <div class="flex flex-1 flex-col">
            <div class="flex items-center justify-between p-6">
                <BrandMark class="lg:invisible" />
            </div>
            <div class="flex flex-1 items-center justify-center p-6">
                <div class="w-full max-w-lg">
                    <router-view />
                </div>
            </div>
        </div>
        <!-- End Form area -->

        <!-- Floating theme switcher -->
        <div class="fixed bottom-6 right-6 z-50">
            <ThemeSwitcher />
        </div>
        <!-- End Floating theme switcher -->
    </div>
</template>
