<script setup lang="ts">
import { ref } from "vue";
import {
    Switch,
    Badge,
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
} from "@dlbcodes/my-design-system";
import { plans, faqs } from "../../config/pricing";
import PricingCard from "../../components/marketing/PricingCard.vue";

const annual = ref(false);
</script>

<template>
    <div class="mx-auto max-w-6xl px-6 py-16">
        <!-- Header -->
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-semibold tracking-tight text-text-primary">
                Simple, transparent pricing
            </h1>
            <p class="mt-3 text-lg text-text-secondary">
                Start for free. Upgrade as you grow. No hidden fees.
            </p>
            <div class="mt-8 flex items-center justify-center gap-3">
                <span
                    class="text-sm"
                    :class="
                        !annual ? 'text-text-primary' : 'text-text-tertiary'
                    "
                    >Monthly</span
                >
                <Switch v-model="annual" />
                <span
                    class="text-sm"
                    :class="annual ? 'text-text-primary' : 'text-text-tertiary'"
                    >Annual</span
                >
                <Badge variant="success">Save 20%</Badge>
            </div>
        </div>

        <!-- Two plans, side by side -->
        <div
            class="mx-auto mt-12 grid max-w-3xl grid-cols-1 items-stretch gap-6 md:grid-cols-2"
        >
            <PricingCard
                v-for="plan in plans"
                :key="plan.name"
                :plan="plan"
                :annual="annual"
            />
        </div>

        <!-- FAQ -->
        <div class="mx-auto mt-24 max-w-2xl">
            <h2
                class="text-center text-2xl font-semibold tracking-tight text-text-primary"
            >
                Frequently asked questions
            </h2>
            <div class="mt-8 flex flex-col">
                <div
                    v-for="faq in faqs"
                    :key="faq.question"
                    class="border-b border-border-subtle"
                >
                    <Disclosure>
                        <DisclosureTrigger>{{
                            faq.question
                        }}</DisclosureTrigger>
                        <DisclosureContent>
                            <p
                                class="pb-4 text-sm leading-relaxed text-text-secondary"
                            >
                                {{ faq.answer }}
                            </p>
                        </DisclosureContent>
                    </Disclosure>
                </div>
            </div>
        </div>
    </div>
</template>
