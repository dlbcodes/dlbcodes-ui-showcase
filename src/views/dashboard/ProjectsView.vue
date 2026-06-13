<script setup lang="ts">
import { ref } from "vue";
import {
    Empty,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    EmptyDescription,
    EmptyContent,
    Button,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalContent,
    ModalFooter,
    ModalClose,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    Input,
    Textarea,
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    MultiSelect,
    MultiSelectTrigger,
    MultiSelectContent,
    MultiSelectItem,
} from "@dlbcodes/my-design-system";
import { PhFolderOpen, PhPlus } from "@phosphor-icons/vue";

const createOpen = ref(false);

// Form state
const name = ref("");
const description = ref("");
const visibility = ref("private");
const teamMembers = ref<string[]>([]);

const memberOptions = [
    { value: "ana", label: "Ana Silva" },
    { value: "john", label: "John Carter" },
    { value: "maria", label: "Maria Santos" },
    { value: "pedro", label: "Pedro Costa" },
];

const resetForm = (): void => {
    name.value = "";
    description.value = "";
    visibility.value = "";
    teamMembers.value = [];
};

const openCreate = (): void => {
    resetForm();
    createOpen.value = true;
};

const createProject = (): void => {
    // (mock) — in a real app you'd persist here
    createOpen.value = false;
};
</script>

<template>
    <Empty class="min-h-[60vh]">
        <EmptyHeader>
            <EmptyMedia variant="icon">
                <PhFolderOpen class="size-6 text-text-secondary" />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
                Projects help you organize your work. Create your first one to
                get started.
            </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
            <Button variant="primary" @click="openCreate">
                <PhPlus class="size-4" />
                Create project
            </Button>
        </EmptyContent>
    </Empty>

    <!-- Create project modal -->
    <Modal v-model="createOpen" size="lg" :closeOnBackdrop="false">
        <ModalHeader>
            <ModalTitle>Create a project</ModalTitle>
            <ModalDescription
                >Set up a new project for your team.</ModalDescription
            >
            <ModalClose />
        </ModalHeader>
        <ModalContent>
            <div class="flex flex-col gap-4">
                <Field required>
                    <FieldLabel>Project name</FieldLabel>
                    <FieldContent>
                        <Input
                            v-model="name"
                            variant="contrast"
                            placeholder="e.g. Website redesign"
                        />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Description</FieldLabel>
                    <FieldContent>
                        <Textarea
                            v-model="description"
                            variant="contrast"
                            placeholder="What's this project about?"
                        />
                        <FieldDescription
                            >Optional — a short summary helps your
                            team.</FieldDescription
                        >
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Visibility</FieldLabel>
                    <FieldContent>
                        <Select v-model="visibility">
                            <SelectTrigger
                                variant="contrast"
                                placeholder="Select visibility"
                            />
                            <SelectContent>
                                <SelectItem value="private">Private</SelectItem>
                                <SelectItem value="team">Team-only</SelectItem>
                                <SelectItem value="public">Public</SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Team members</FieldLabel>
                    <FieldContent>
                        <MultiSelect
                            v-model="teamMembers"
                            :options="memberOptions"
                            placeholder="Add members"
                        >
                            <template #default="{ label, empty }">
                                <MultiSelectTrigger
                                    :label="label"
                                    :empty="empty"
                                    variant="contrast"
                                />
                                <MultiSelectContent size="full">
                                    <MultiSelectItem
                                        v-for="o in memberOptions"
                                        :key="o.value"
                                        :value="o.value"
                                        :label="o.label"
                                    />
                                </MultiSelectContent>
                            </template>
                        </MultiSelect>
                    </FieldContent>
                </Field>
            </div>
        </ModalContent>
        <ModalFooter>
            <Button variant="secondary" @click="createOpen = false"
                >Cancel</Button
            >
            <Button variant="primary" @click="createProject"
                >Create project</Button
            >
        </ModalFooter>
    </Modal>
</template>
