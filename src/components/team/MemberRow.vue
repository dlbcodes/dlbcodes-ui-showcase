<script setup lang="ts">
import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
} from "@dlbcodes/my-design-system";
import {
    PhPencilSimple,
    PhUserGear,
    PhTrash,
    PhDotsThree,
} from "@phosphor-icons/vue";
import type { Member } from "../../types/team";

defineProps<{ member: Member }>();
const emit = defineEmits<{
    (e: "change-role", member: Member): void;
    (e: "remove", member: Member): void;
}>();
</script>

<template>
    <div
        class="flex items-center gap-4 border-b border-border-subtle px-4 py-4 last:border-b-0"
    >
        <Avatar :name="member.name" :src="member.src" />
        <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-text-primary">
                {{ member.name }}
            </p>
            <p class="truncate text-sm text-text-secondary">
                {{ member.email }}
            </p>
        </div>

        <Badge :variant="member.role === 'Admin' ? 'primary' : 'neutral'">{{
            member.role
        }}</Badge>
        <Badge :variant="member.status === 'Active' ? 'success' : 'pending'">{{
            member.status
        }}</Badge>

        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Button
                    variant="secondary"
                    size="icon-sm"
                    aria-label="Member actions"
                >
                    <PhDotsThree class="size-4" />
                </Button>
            </DropdownTrigger>
            <DropdownContent size="xs">
                <DropdownItem>
                    <PhPencilSimple class="size-4" /> Edit
                </DropdownItem>
                <DropdownItem @click="emit('change-role', member)">
                    <PhUserGear class="size-4" /> Change role
                </DropdownItem>
                <DropdownItem @click="emit('remove', member)">
                    <PhTrash class="size-4" /> Remove
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    </div>
</template>
