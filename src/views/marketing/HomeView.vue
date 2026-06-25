<script setup lang="ts">
import { Badge, Button } from "@dlbcodes/my-design-system";
</script>

<template>
    <div class="mx-auto flex max-w-6xl flex-col gap-y-20 px-6 py-30">
        <div class="flex flex-col items-center gap-y-6">
            <div class="flex flex-col items-center gap-y-1">
                <Badge>Open Source</Badge>
                <h1 class="text-5xl font-serif tracking-wide text-text-primary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p
                    class="mt-1 font-serif text-2xl tracking-wide text-text-secondary"
                >
                    Everything else you might be wondering.
                </p>
            </div>
            <div class="flex items-center gap-x-4">
                <Button variant="secondary">Lorem ipsum</Button>
                <Button variant="primary">Lorem ipsum</Button>
            </div>
        </div>
    </div>
</template>
