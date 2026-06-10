<script setup lang="ts">
import BrandMark from "../BrandMark.vue";
import { siteConfig } from "../../config/site.ts";
import { footerNav } from "../../config/nav.ts";
import {
    Panel,
    PanelContent,
    PanelFooter,
    Badge,
} from "@dlbcodes/my-design-system";
</script>

<template>
    <footer class="w-full flex flex-col max-w-6xl mx-auto pt-20 pb-10">
        <Panel>
            <PanelContent
                class="flex flex-col gap-y-4 md:flex-row justify-between gap-x-32 w-full rounded-2xl py-16 px-10"
            >
                <!-- Logo -->
                <div class="flex flex-col gap-y-8">
                    <div class="flex flex-col gap-y-4">
                        <BrandMark class="[&_span]:text-sm" />
                        <p class="text-sm text-text-secondary">
                            {{ siteConfig.description }}
                        </p>
                    </div>
                </div>
                <!-- End Logo -->

                <div
                    class="flex flex-col gap-y-8 md:flex-row md:gap-x-24 md:min-w-lg"
                >
                    <div
                        v-for="section in footerNav"
                        :key="section.title"
                        class="flex flex-col flex-1 gap-y-2"
                    >
                        <h3
                            class="flex items-center gap-x-1 text-sm font-medium text-text-primary"
                        >
                            {{ section.title }}
                            <Badge v-if="section.soon">Soon</Badge>
                        </h3>
                        <ul class="flex flex-col gap-y-2">
                            <li v-for="item in section.items" :key="item.label">
                                <span
                                    v-if="item.disabled"
                                    class="text-sm text-text-tertiary cursor-not-allowed"
                                >
                                    {{ item.label }}
                                </span>
                                <RouterLink
                                    v-else
                                    :to="item.href"
                                    class="text-sm text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    {{ item.label }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Social -->
                    <div class="flex flex-col flex-1 gap-y-2">
                        <h3
                            class="flex items-center gap-x-1 text-sm font-medium text-text-primary"
                        >
                            Social
                        </h3>
                        <ul class="flex flex-col gap-y-2">
                            <li
                                v-for="(url, name) in siteConfig.links"
                                :key="name"
                            >
                                <a
                                    :href="url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="capitalize text-sm text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    {{ name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </PanelContent>
            <PanelFooter
                class="flex flex-col items-center gap-y-2 md:flex-row justify-between px-6 py-2"
            >
                <!-- Legal -->
                <div class="flex gap-x-6">
                    <p
                        class="font-mono text-xs text-text-primary cursor-pointer ease-in-out duration-200 hover:text-text-primary"
                    >
                        Privacy Policy
                    </p>
                    <p
                        class="font-mono text-xs text-text-primary cursor-pointer ease-in-out duration-200 hover:text-text-primary"
                    >
                        Terms and Conditions
                    </p>
                </div>
                <!-- End Legal -->

                <!-- Copyrights -->
                <div class="font-mono text-xs text-text-primary">
                    © {{ new Date().getFullYear() }} {{ siteConfig.name }}. All
                    Rights Reserved.
                </div>
                <!-- End Copyrights -->
            </PanelFooter>
        </Panel>
    </footer>
</template>
