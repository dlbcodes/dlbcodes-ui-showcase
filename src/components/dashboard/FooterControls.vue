<script setup lang="ts">
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    Button,
} from "@dlbcodes/my-design-system";
import { PhUser, PhGear, PhSignOut, PhQuestion } from "@phosphor-icons/vue";
</script>

<template>
    <Dropdown>
        <DropdownTrigger>
            <Button
                variant="secondary"
                size="icon-sm"
                aria-label="Footer actions"
            >
                <PhQuestion class="size-6" />
            </Button>
        </DropdownTrigger>
        <DropdownContent size="3xs">
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
