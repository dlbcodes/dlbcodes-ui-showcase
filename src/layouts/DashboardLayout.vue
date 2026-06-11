<script setup lang="ts">
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
    PhGear,
} from "@phosphor-icons/vue";
import BrandMark from "../components/BrandMark.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import UserMenu from "../components/dashboard/UserMenu.vue";
import WorkspaceSwitcher from "../components/dashboard/WorkspaceSwitcher.vue";

const route = useRoute();
const isActive = (path: string): boolean => route.path === path;

const nav = [
    { label: "Overview", path: "/dashboard", icon: PhSquaresFour },
    { label: "Analytics", path: "", icon: PhChartLine },
    { label: "Projects", path: "", icon: PhFolder },
    { label: "Team", path: "/dashboard/team", icon: PhUsers },
    { label: "Settings", path: "/dashboard/settings", icon: PhGear },
];
</script>

<template>
    <SidebarProvider>
        <div class="flex h-screen w-screen overflow-hidden bg-bg-base">
            <Sidebar>
                <SidebarHeader
                    class="flex flex-col items-start gap-y-4 px-2 w-full"
                >
                    <BrandMark />
                    <WorkspaceSwitcher class="w-full" />
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarItem
                            v-for="item in nav"
                            :key="item.path"
                            :as="RouterLink"
                            :to="item.path"
                            :active="isActive(item.path)"
                            class="gap-2"
                        >
                            <component :is="item.icon" /> {{ item.label }}
                        </SidebarItem>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <div class="flex flex-col gap-2">
                        <ThemeSwitcher />
                        <UserMenu />
                    </div>
                </SidebarFooter>
            </Sidebar>

            <!-- Content (no top bar) -->
            <main class="relative flex-1 overflow-auto">
                <!-- Floating mobile trigger -->
                <div class="absolute left-4 top-4 z-10">
                    <SidebarTrigger />
                </div>

                <div class="mx-auto max-w-6xl px-6 py-8">
                    <router-view />
                </div>
            </main>
        </div>
    </SidebarProvider>
</template>
