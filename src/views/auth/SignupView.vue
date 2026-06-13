<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import {
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    Input,
    Button,
} from "@dlbcodes/my-design-system";

const name = ref("");
const email = ref("");
const password = ref("");
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold tracking-tight text-text-primary">
                Create your account
            </h1>
            <p class="mt-1 text-sm text-text-secondary">
                Start building in minutes.
            </p>
        </div>

        <div class="flex flex-col gap-4">
            <Field>
                <FieldLabel>Full name</FieldLabel>
                <FieldContent
                    ><Input v-model="name" placeholder="Daniel Lobo"
                /></FieldContent>
            </Field>
            <Field>
                <FieldLabel>Email</FieldLabel>
                <FieldContent
                    ><Input
                        v-model="email"
                        type="email"
                        placeholder="you@example.com"
                /></FieldContent>
            </Field>
            <Field>
                <FieldLabel>Password</FieldLabel>
                <FieldContent>
                    <Input
                        v-model="password"
                        type="password"
                        placeholder="••••••••"
                    />
                    <FieldDescription>At least 8 characters.</FieldDescription>
                </FieldContent>
            </Field>

            <Button
                to="/dashboard"
                variant="primary"
                class="w-full justify-center"
            >
                Create account
            </Button>
        </div>

        <p class="text-center text-sm text-text-secondary">
            Already have an account?
            <RouterLink
                to="/login"
                class="font-medium text-brand-200 hover:underline"
            >
                Sign in
            </RouterLink>
        </p>
    </div>
</template>
