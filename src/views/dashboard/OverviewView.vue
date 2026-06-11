<script setup lang="ts">
import {
    Panel,
    PanelHeader,
    PanelContent,
    Badge,
    Avatar,
    Separator,
} from "@dlbcodes/my-design-system";
import { PhTrendUp, PhTrendDown } from "@phosphor-icons/vue";
import { metrics, activity } from "../../data/mock";
</script>

<template>
    <div class="flex flex-col gap-8">
        <!-- Metrics -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Panel v-for="m in metrics" :key="m.label">
                <PanelHeader class="flex items-center gap-x-px px-4 py-1">
                    <span class="font-mono text-xs">
                        {{ m.label }}
                    </span>
                </PanelHeader>
                <PanelContent class="flex flex-col gap-2 p-5">
                    <span
                        class="text-2xl font-semibold tracking-tight text-text-primary"
                        >{{ m.value }}</span
                    >
                    <Badge
                        :variant="m.trend === 'up' ? 'success' : 'destructive'"
                        class="w-fit"
                    >
                        <component
                            :is="m.trend === 'up' ? PhTrendUp : PhTrendDown"
                            class="size-3"
                            weight="bold"
                        />
                        {{ m.change }}
                    </Badge>
                </PanelContent>
            </Panel>
        </div>

        <!-- Activity + a side panel -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Panel class="lg:col-span-2">
                <PanelHeader class="flex items-center gap-x-px px-4 py-1">
                    <img
                        src="../../assets/icons/flame.png"
                        alt="Flame icon"
                        class="size-6 shrink-0"
                    />
                    <h2 class="font-mono font-medium text-sm text-text-primary">
                        Recent activity
                    </h2>
                </PanelHeader>
                <PanelContent class="px-6">
                    <div class="mt-4 flex flex-col">
                        <div v-for="(a, i) in activity" :key="a.id">
                            <div class="flex items-center gap-3 py-3">
                                <Avatar :name="a.user" :src="a.img" size="sm" />
                                <p class="flex-1 text-sm text-text-secondary">
                                    <span
                                        class="font-medium text-text-primary"
                                        >{{ a.user }}</span
                                    >
                                    {{ a.action }}
                                </p>
                                <span class="text-xs text-text-tertiary">{{
                                    a.time
                                }}</span>
                            </div>
                            <Separator v-if="i < activity.length - 1" />
                        </div>
                    </div>
                </PanelContent>
            </Panel>

            <Panel>
                <PanelContent class="flex flex-col gap-4 p-6">
                    <h2 class="font-semibold text-text-primary">Your plan</h2>
                    <div class="flex items-center gap-2">
                        <Badge variant="primary">Pro</Badge>
                        <span class="text-sm text-text-secondary"
                            >$20 / month</span
                        >
                    </div>
                    <p class="text-sm text-text-secondary">
                        You're on the Pro plan. Manage billing in settings.
                    </p>
                </PanelContent>
            </Panel>
        </div>
    </div>
</template>
