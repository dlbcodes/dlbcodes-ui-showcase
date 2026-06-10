<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "../composables/useTheme";
import BrandMark from "../components/BrandMark.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

const { brand } = useTheme();
const tagline = computed(() => brand().tagline);
</script>

<template>
    <div class="flex min-h-screen bg-bg-base">
        <!-- Brand panel (hidden on small screens) -->
        <div
            class="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-brand-200 p-12 lg:flex"
        >
            <BrandMark class="[&_span]:text-white" />
            <div>
                <p
                    class="max-w-md text-3xl font-semibold leading-tight text-white"
                >
                    {{ tagline }}
                </p>
                <p class="mt-4 max-w-md text-white/70">
                    A reference application built entirely with the design
                    system — fully themeable, accessible, and composed from
                    reusable components.
                </p>
            </div>
            <p class="text-sm text-white/60">
                © 2026 — a design system showcase
            </p>

            <!-- subtle decorative grid -->
            <div
                class="pointer-events-none absolute inset-0 opacity-10"
                style="
                    background-image:
                        linear-gradient(white 1px, transparent 1px),
                        linear-gradient(90deg, white 1px, transparent 1px);
                    background-size: 40px 40px;
                "
            ></div>
        </div>

        <!-- Form area -->
        <div class="flex flex-1 flex-col">
            <div class="flex items-center justify-between p-6">
                <BrandMark class="lg:invisible" />
                <ThemeSwitcher />
            </div>
            <div class="flex flex-1 items-center justify-center p-6">
                <div class="w-full max-w-lg">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
