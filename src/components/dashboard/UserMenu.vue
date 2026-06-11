<script setup lang="ts">
import { RouterLink } from "vue-router";
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    Avatar,
} from "@dlbcodes/my-design-system";
import { PhUser, PhGear, PhSignOut, PhCaretUpDown } from "@phosphor-icons/vue";
import { currentUser } from "../../data/mock";
</script>

<template>
    <Dropdown>
        <DropdownTrigger>
            <button
                type="button"
                class="flex w-full items-center gap-2 rounded-lg p-2 text-left transition-colors hover:bg-bg-subtle"
            >
                <Avatar
                    :name="currentUser.name"
                    :src="currentUser.img"
                    size="sm"
                />
                <span class="flex min-w-0 flex-1 flex-col">
                    <span
                        class="truncate text-sm font-medium text-text-primary"
                        >{{ currentUser.name }}</span
                    >
                    <span class="truncate text-xs text-text-tertiary">{{
                        currentUser.email
                    }}</span>
                </span>
                <PhCaretUpDown class="size-4 shrink-0 text-text-tertiary" />
            </button>
        </DropdownTrigger>
        <DropdownContent>
            <RouterLink to="/dashboard/settings">
                <DropdownItem><PhUser class="size-4" /> Profile</DropdownItem>
            </RouterLink>
            <RouterLink to="/dashboard/settings">
                <DropdownItem><PhGear class="size-4" /> Settings</DropdownItem>
            </RouterLink>
            <RouterLink to="/login">
                <DropdownItem
                    ><PhSignOut class="size-4" /> Log out</DropdownItem
                >
            </RouterLink>
        </DropdownContent>
    </Dropdown>
</template>
