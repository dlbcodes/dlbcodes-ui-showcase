<script setup lang="ts">
import SiteHeader from "../components/marketing/SiteHeader.vue";
import SiteFooter from "../components/marketing/SiteFooter.vue";
</script>

<template>
    <div class="flex min-h-screen flex-col bg-bg-base">
        <SiteHeader />
        <main class="flex-1 pt-28">
            <router-view />
        </main>
        <SiteFooter />
    </div>
</template>
