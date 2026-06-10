<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "../composables/useTheme";
import { PhCube } from "@phosphor-icons/vue";

const { brand } = useTheme();
const name = computed(() => brand().name);
</script>

<template>
    <div class="flex items-center gap-2">
        <div
            class="flex size-8 items-center justify-center rounded-lg bg-brand-200 text-white"
        >
            <PhCube class="size-5" weight="fill" />
        </div>
        <span class="text-lg font-semibold tracking-tight text-text-primary">
            {{ name }}
        </span>
    </div>
</template>
