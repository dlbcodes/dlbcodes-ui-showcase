<script setup lang="ts">
import { RouterLink } from "vue-router";
import BrandMark from "../BrandMark.vue";
import { Button } from "@dlbcodes/my-design-system";
import { marketingNav } from "../../config/nav.ts";
import { Panel, PanelHeader, PanelContent } from "@dlbcodes/my-design-system";
</script>

<template>
    <header
        class="fixed left-0 right-0 flex items-center backdrop-blur-xs pt-4 w-full z-40 mx-auto max-w-4xl"
    >
        <Panel class="overflow-visible">
            <PanelHeader
                class="flex justify-center items-center text-xs font-mono"
            >
                New: Pro now includes team licensing.
            </PanelHeader>
            <PanelContent class="flex items-center p-3 overflow-visible">
                <RouterLink to="/" class="flex-1"><BrandMark /></RouterLink>
                <nav
                    class="hidden items-center gap-8 md:flex md:flex-1 justify-center"
                >
                    <RouterLink
                        v-for="item in marketingNav"
                        :key="item.href"
                        :to="item.href"
                        class="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                        {{ item.label }}
                    </RouterLink>
                </nav>
                <div class="flex flex-1 items-center justify-end gap-2">
                    <RouterLink to="/login">
                        <Button variant="secondary" size="sm">Sign in</Button>
                    </RouterLink>
                    <RouterLink to="/signup" class="hidden sm:block">
                        <Button variant="primary" size="sm">Get started</Button>
                    </RouterLink>
                </div>
            </PanelContent>
        </Panel>
    </header>
</template>
