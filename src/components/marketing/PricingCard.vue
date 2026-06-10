<script setup lang="ts">
import { RouterLink } from "vue-router";
import {
    Panel,
    PanelContent,
    Button,
    Badge,
    Separator,
} from "@dlbcodes/my-design-system";
import { PhCheck } from "@phosphor-icons/vue";
import type { PricingPlan } from "../../config/pricing";

interface Props {
    plan: PricingPlan;
    annual: boolean;
    /** Render the taller, emphasized layout (the featured plan). */
    large?: boolean;
}

const props = withDefaults(defineProps<Props>(), { large: false });

const price = (): number =>
    props.annual ? props.plan.price.annual : props.plan.price.monthly;
</script>

<template>
    <Panel class="h-full" :class="plan.featured ? 'ring-2 ring-brand-200' : ''">
        <PanelContent
            class="flex h-full flex-col gap-6"
            :class="large ? 'p-10' : 'p-8'"
        >
            <div>
                <div class="flex items-center gap-2">
                    <h2
                        class="font-semibold text-text-primary"
                        :class="large ? 'text-2xl' : 'text-lg'"
                    >
                        {{ plan.name }}
                    </h2>
                    <Badge v-if="plan.featured" variant="primary"
                        >Popular</Badge
                    >
                </div>
                <p class="mt-1 text-sm text-text-secondary">
                    {{ plan.description }}
                </p>
            </div>

            <div class="flex items-baseline gap-1">
                <span
                    class="font-semibold tracking-tight text-text-primary"
                    :class="large ? 'text-5xl' : 'text-4xl'"
                >
                    ${{ price() }}
                </span>
                <span class="text-sm text-text-tertiary">/ month</span>
            </div>

            <RouterLink to="/signup">
                <Button
                    :variant="plan.featured ? 'primary' : 'secondary'"
                    class="w-full justify-center"
                >
                    {{ plan.cta }}
                </Button>
            </RouterLink>

            <Separator />

            <ul class="flex flex-1 flex-col gap-3">
                <li
                    v-for="f in plan.features"
                    :key="f"
                    class="flex items-center gap-2 text-sm text-text-secondary"
                >
                    <PhCheck
                        class="size-4 shrink-0 text-brand-200"
                        weight="bold"
                    />
                    {{ f }}
                </li>
            </ul>
        </PanelContent>
    </Panel>
</template>
