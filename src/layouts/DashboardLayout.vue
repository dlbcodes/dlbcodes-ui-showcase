<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import {
    SidebarProvider,
    Sidebar,
    SidebarTrigger,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarItem,
} from "@dlbcodes/my-design-system";
import {
    PhSquaresFour,
    PhChartLine,
    PhFolder,
    PhUsers,
} from "@phosphor-icons/vue";
import BrandMark from "../components/BrandMark.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import UserMenu from "../components/dashboard/UserMenu.vue";
import WorkspaceSwitcher from "../components/dashboard/WorkspaceSwitcher.vue";

const route = useRoute();
const isActive = (path: string): boolean => route.path === path;
const pageTitle = computed(() => (route.meta.title as string) ?? "");

const nav = [
    { label: "Overview", path: "/dashboard", icon: PhSquaresFour },
    { label: "Analytics", path: "", icon: PhChartLine },
    { label: "Projects", path: "", icon: PhFolder },
    { label: "Team", path: "/dashboard/team", icon: PhUsers },
];
</script>

<template>
    <SidebarProvider>
        <div class="flex h-screen w-screen overflow-hidden bg-bg-surface">
            <Sidebar class="border-none">
                <SidebarHeader
                    class="flex w-full flex-col items-start gap-y-4 px-2"
                >
                    <BrandMark />
                    <WorkspaceSwitcher class="w-full" />
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarItem
                            v-for="item in nav"
                            :key="item.label"
                            :as="RouterLink"
                            :to="item.path"
                            :active="isActive(item.path)"
                            class="gap-2"
                        >
                            <component :is="item.icon" /> {{ item.label }}
                        </SidebarItem>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter class="border-none">
                    <div class="flex flex-col gap-2">
                        <ThemeSwitcher />
                        <UserMenu />
                    </div>
                </SidebarFooter>
            </Sidebar>

            <!-- Content panel -->
            <main
                class="relative mt-0 md:mt-2 flex-1 overflow-auto rounded-none md:rounded-tl-2xl bg-bg-base shadow-md"
            >
                <!-- Sticky title bar -->
                <header
                    class="sticky top-0 z-20 flex items-center gap-3 rounded-tl-2xl border-b border-border-subtle bg-bg-base/80 px-6 py-3 backdrop-blur"
                >
                    <SidebarTrigger class="md:hidden" />
                    <h1 class="text-xl font-medium text-text-primary">
                        {{ pageTitle }}
                    </h1>

                    <!-- Per-page actions teleport here -->
                    <div
                        id="page-actions"
                        class="ml-auto flex items-center gap-2"
                    ></div>
                </header>

                <div class="mx-auto max-w-6xl px-6 pt-8 pb-8">
                    <router-view />
                </div>
            </main>
        </div>
    </SidebarProvider>
</template>
