<script setup lang="ts">
import { SidebarProvider } from "@dlbcodes/my-design-system";
import DashboardShell from "./DashboardShell.vue";
</script>

<template>
    <SidebarProvider>
        <DashboardShell />
    </SidebarProvider>
</template>
