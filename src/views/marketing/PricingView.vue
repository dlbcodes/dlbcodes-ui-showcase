<script setup lang="ts">
import { ref } from "vue";
import {
    Label,
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
    <div class="mx-auto flex max-w-6xl flex-col gap-y-20 px-6 py-16">
        <!-- Pricing -->
        <section class="flex flex-col gap-y-12">
            <!-- Header -->
            <div class="mx-auto max-w-2xl text-center">
                <h1
                    class="font-serif text-4xl lg:text-5xl tracking-wide text-text-primary"
                >
                    Simple, transparent pricing
                </h1>
                <p
                    class="mt-1 font-serif text-lg md:text-xl tracking-wide text-text-secondary"
                >
                    Start for free. Upgrade as you grow. No hidden fees.
                </p>

                <!-- Billing toggle -->
                <div class="mt-8 flex items-center justify-center gap-3">
                    <Label
                        for="pricing"
                        :class="
                            annual ? 'text-text-tertiary' : 'text-text-primary'
                        "
                    >
                        Monthly
                    </Label>
                    <Switch v-model="annual" id="pricing" />
                    <Label
                        for="pricing"
                        :class="
                            annual ? 'text-text-primary' : 'text-text-tertiary'
                        "
                    >
                        Annual
                    </Label>

                    <Badge variant="success">Save 20%</Badge>
                </div>
                <!-- End Billing toggle -->
            </div>
            <!-- End Header -->

            <!-- Plans -->
            <div
                class="mx-auto grid w-full max-w-3xl grid-cols-1 items-stretch gap-6 md:grid-cols-2"
            >
                <PricingCard
                    v-for="plan in plans"
                    :key="plan.name"
                    :plan="plan"
                    :annual="annual"
                />
            </div>
            <!-- End Plans -->
        </section>
        <!-- End Pricing -->

        <!-- FAQ -->
        <section class="mx-auto flex w-full max-w-3xl flex-col gap-y-8">
            <!-- Header -->
            <div class="text-center">
                <h2
                    class="font-serif text-3xl md:text-4xl tracking-wide text-text-primary"
                >
                    Frequently asked questions
                </h2>
                <p
                    class="mt-1 font-serif text-lg tracking-wide text-text-secondary"
                >
                    Everything else you might be wondering.
                </p>
            </div>
            <!-- End Header -->

            <!-- Questions -->
            <div class="flex flex-col">
                <Disclosure v-for="faq in faqs" :key="faq.question">
                    <DisclosureTrigger class="font-serif text-xl tracking-wide">
                        {{ faq.question }}
                    </DisclosureTrigger>
                    <DisclosureContent
                        class="text-base leading-relaxed text-text-secondary"
                    >
                        {{ faq.answer }}
                    </DisclosureContent>
                </Disclosure>
            </div>
            <!-- End Questions -->
        </section>
        <!-- End FAQ -->
    </div>
</template>
