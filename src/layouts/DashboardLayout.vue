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
    Badge,
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
import FooterControls from "../components/dashboard/FooterControls.vue";

const route = useRoute();
const isActive = (path: string): boolean => route.path === path;
const pageTitle = computed(() => (route.meta.title as string) ?? "");

const nav = [
    {
        label: "Overview",
        path: "/dashboard",
        icon: PhSquaresFour,
        disabled: false,
    },
    { label: "Analytics", path: "", icon: PhChartLine, disabled: true },
    {
        label: "Projects",
        path: "/dashboard/projects",
        icon: PhFolder,
        disabled: false,
    },
    { label: "Team", path: "/dashboard/team", icon: PhUsers, disabled: false },
];
</script>

<template>
    <SidebarProvider>
        <div class="flex h-dvh w-full overflow-hidden bg-bg-surface">
            <Sidebar class="border-none">
                <SidebarHeader
                    class="flex w-full flex-col items-start gap-y-4 px-2"
                >
                    <RouterLink to="/dashboard">
                        <BrandMark />
                    </RouterLink>
                    <WorkspaceSwitcher />
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarItem
                            v-for="item in nav"
                            :key="item.label"
                            :as="RouterLink"
                            :to="item.path"
                            :active="isActive(item.path)"
                            :disabled="item.disabled"
                            class="gap-2"
                        >
                            <component :is="item.icon" />
                            {{ item.label }}
                            <Badge v-if="item.disabled" class="ml-auto">
                                Soon
                            </Badge>
                        </SidebarItem>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter class="border-none">
                    <div class="flex flex-col gap-2">
                        <ThemeSwitcher />
                        <div class="flex justify-between">
                            <FooterControls />
                            <UserMenu />
                        </div>
                    </div>
                </SidebarFooter>
            </Sidebar>

            <!-- Content panel -->
            <main
                class="relative mt-0 flex-1 overflow-auto rounded-none bg-bg-base shadow-md md:mt-2 md:rounded-tl-2xl"
            >
                <header
                    class="sticky top-0 z-20 flex items-center gap-3 rounded-tl-2xl border-b border-border-subtle bg-bg-base/80 px-6 py-3 backdrop-blur"
                >
                    <SidebarTrigger />
                    <h1 class="text-xl font-medium text-text-primary">
                        {{ pageTitle }}
                    </h1>
                    <div
                        id="page-actions"
                        class="ml-auto flex items-center gap-2"
                    ></div>
                </header>

                <div class="p-4 md:px-8 pt-8 pb-8">
                    <router-view />
                </div>
            </main>
        </div>
    </SidebarProvider>
</template>
