<script setup lang="ts">
import { ref } from "vue";
import {
    Panel,
    PanelContent,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsPanels,
    TabsContent,
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    Input,
    Switch,
    Checkbox,
    Label,
    Button,
} from "@dlbcodes/my-design-system";

// Profile
const name = ref("Daniel Lobo");
const email = ref("daniel@example.com");

// Security
const twoFactor = ref(true);
const sessionAlerts = ref(false);

// Notifications
const emailNotifs = ref(true);
const pushNotifs = ref(false);

// Advanced (inside a disclosure)
const apiAccess = ref(false);
const betaFeatures = ref(false);
</script>

<template>
    <div class="flex flex-col gap-6">
        <!-- <div>
            <h1 class="text-2xl font-semibold text-text-primary">Account</h1>
            <p class="mt-1 text-sm text-text-secondary">
                Manage your account across these sections.
            </p>
        </div> -->

        <Tabs class="max-w-3xl">
            <TabsList>
                <TabsTrigger>Profile</TabsTrigger>
                <TabsTrigger>Security</TabsTrigger>
                <TabsTrigger>Notifications</TabsTrigger>
            </TabsList>

            <TabsPanels>
                <!-- Profile -->
                <TabsContent>
                    <Panel>
                        <PanelContent class="flex flex-col gap-y-4 p-8">
                            <Field>
                                <FieldLabel>Name</FieldLabel>
                                <FieldContent>
                                    <Input
                                        v-model="name"
                                        placeholder="Your name"
                                    />
                                </FieldContent>
                            </Field>
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <FieldContent>
                                    <Input
                                        v-model="email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                    <FieldDescription
                                        >Used for sign-in and
                                        notifications.</FieldDescription
                                    >
                                </FieldContent>
                            </Field>
                            <div class="flex justify-end">
                                <Button variant="primary">Save profile</Button>
                            </div>
                        </PanelContent>
                    </Panel>
                </TabsContent>

                <!-- Security -->
                <TabsContent>
                    <Panel>
                        <PanelContent class="flex flex-col gap-y-4 p-8">
                            <Field orientation="horizontal">
                                <Switch v-model="twoFactor" />
                                <FieldLabel
                                    >Two-factor authentication</FieldLabel
                                >
                            </Field>
                            <Field orientation="horizontal">
                                <Switch v-model="sessionAlerts" />
                                <FieldLabel
                                    >Alert me about new sign-ins</FieldLabel
                                >
                            </Field>

                            <!-- Advanced options tucked in a disclosure -->
                            <div class="border-t border-border-subtle">
                                <Disclosure>
                                    <DisclosureTrigger
                                        >Advanced options</DisclosureTrigger
                                    >
                                    <DisclosureContent>
                                        <div class="flex flex-col gap-3 pt-1">
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <Checkbox
                                                    id="api"
                                                    v-model="apiAccess"
                                                />
                                                <Label for="api"
                                                    >Enable API access</Label
                                                >
                                            </div>
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <Checkbox
                                                    id="beta"
                                                    v-model="betaFeatures"
                                                />
                                                <Label for="beta"
                                                    >Join the beta
                                                    program</Label
                                                >
                                            </div>
                                        </div>
                                    </DisclosureContent>
                                </Disclosure>
                            </div>
                        </PanelContent>
                    </Panel>
                </TabsContent>

                <!-- Notifications -->
                <TabsContent>
                    <Panel>
                        <PanelContent class="flex flex-col gap-y-4 p-8">
                            <Field orientation="horizontal">
                                <Switch v-model="emailNotifs" />
                                <FieldLabel>Email notifications</FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Switch v-model="pushNotifs" />
                                <FieldLabel>Push notifications</FieldLabel>
                            </Field>
                        </PanelContent>
                    </Panel>
                </TabsContent>
            </TabsPanels>
        </Tabs>
    </div>
</template>
