<script setup lang="ts">
import { ref } from "vue";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Avatar,
    Badge,
    Kbd,
} from "@dlbcodes/my-design-system";
import { PhCaretUpDown, PhCheck, PhPlus, PhGear } from "@phosphor-icons/vue";
import { workspaces, type Workspace } from "../../data/mock";

const activeId = ref("1");
const active = ref<Workspace>(workspaces[0]);

const select = (ws: Workspace, close: () => void): void => {
    activeId.value = ws.id;
    active.value = ws;
    close();
};

const planVariant = (
    plan: Workspace["plan"],
): "primary" | "success" | "neutral" => {
    if (plan === "Enterprise") return "primary";
    if (plan === "Pro") return "success";
    return "neutral";
};
</script>

<template>
    <Popover placement="bottom-start" class="w-full">
        <PopoverTrigger class="w-full">
            <button
                type="button"
                class="flex w-full items-center bg-white border-border-strong justify-between gap-2 rounded-lg p-2 text-left transition-colors hover:bg-bg-subtle"
            >
                <span class="flex min-w-0 items-center gap-2">
                    <Avatar :name="active.name" :src="null" size="sm" />
                    <span class="flex min-w-0 flex-col">
                        <span
                            class="truncate text-sm font-medium text-text-primary"
                            >{{ active.name }}</span
                        >
                        <span class="truncate text-xs text-text-tertiary"
                            >{{ active.plan }} plan</span
                        >
                    </span>
                </span>
                <PhCaretUpDown class="size-4 shrink-0 text-text-tertiary" />
            </button>
        </PopoverTrigger>

        <PopoverContent size="sm">
            <template #default="{ close }">
                <div class="flex flex-col gap-0.5 p-1">
                    <p
                        class="px-2 py-1.5 text-xs font-medium text-text-tertiary"
                    >
                        Workspaces
                    </p>

                    <button
                        v-for="(ws, i) in workspaces"
                        :key="ws.id"
                        type="button"
                        class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition-colors hover:bg-bg-surface"
                        @click="select(ws, close)"
                    >
                        <Avatar :name="ws.name" :src="null" size="sm" />
                        <span
                            class="flex-1 truncate text-sm font-medium text-text-primary"
                            >{{ ws.name }}</span
                        >
                        <Badge :variant="planVariant(ws.plan)">{{
                            ws.plan
                        }}</Badge>
                        <PhCheck
                            v-if="ws.id === activeId"
                            class="size-4 text-brand-200"
                        />
                        <Kbd v-else>⌘{{ i + 1 }}</Kbd>
                    </button>

                    <div class="my-1 h-px bg-border-subtle"></div>

                    <button
                        type="button"
                        class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-bg-surface"
                        @click="close"
                    >
                        <PhPlus class="size-4" /> Create workspace
                    </button>
                    <button
                        type="button"
                        class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-bg-surface"
                        @click="close"
                    >
                        <PhGear class="size-4" /> Workspace settings
                    </button>
                </div>
            </template>
        </PopoverContent>
    </Popover>
</template>
