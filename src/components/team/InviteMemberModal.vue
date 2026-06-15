<script setup lang="ts">
import { ref, watch } from "vue";
import {
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
    Input,
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    MultiSelect,
    MultiSelectTrigger,
    MultiSelectContent,
    MultiSelectItem,
    Button,
} from "@dlbcodes/my-design-system";
import { teamOptions } from "../../types/team";

const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{
    (e: "update:open", value: boolean): void;
    (
        e: "invite",
        payload: { email: string; role: string; teams: string[] },
    ): void;
}>();

const email = ref("");
const role = ref("Member");
const teams = ref<string[]>([]);

const reset = (): void => {
    email.value = "";
    role.value = "Member";
    teams.value = [];
};

// Reset the form each time the modal opens.
watch(
    () => props.open,
    (isOpen) => {
        if (isOpen) reset();
    },
);

const submit = (): void => {
    emit("invite", {
        email: email.value,
        role: role.value,
        teams: teams.value,
    });
    emit("update:open", false);
};

const summarize = (count: number, total: number) =>
    `${count} of ${total} teams`;
</script>

<template>
    <Modal
        :model-value="open"
        size="lg"
        @update:model-value="emit('update:open', $event)"
    >
        <ModalHeader>
            <ModalTitle>Invite a member</ModalTitle>
            <ModalDescription>
                Send an invitation to join your team.
            </ModalDescription>
            <ModalClose />
        </ModalHeader>
        <ModalContent>
            <div class="flex flex-col gap-4">
                <Field required>
                    <FieldLabel>Email address</FieldLabel>
                    <FieldContent>
                        <Input
                            v-model="email"
                            type="email"
                            placeholder="name@company.com"
                        />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Role</FieldLabel>
                    <FieldContent>
                        <Select v-model="role">
                            <SelectTrigger placeholder="Select a role" />
                            <SelectContent>
                                <SelectItem value="Admin">Admin</SelectItem>
                                <SelectItem value="Member">Member</SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Teams</FieldLabel>
                    <FieldContent>
                        <MultiSelect
                            v-model="teams"
                            :options="teamOptions"
                            :summarize="summarize"
                            placeholder="Select teams"
                        >
                            <template
                                #default="{
                                    label,
                                    empty,
                                    toggleAll,
                                    allSelected,
                                }"
                            >
                                <MultiSelectTrigger
                                    :label="label"
                                    :empty="empty"
                                />
                                <MultiSelectContent size="full">
                                    <button
                                        type="button"
                                        class="mb-1 w-full rounded-lg px-3 py-2 text-left text-sm text-text-secondary hover:bg-bg-surface"
                                        @click="toggleAll"
                                    >
                                        {{
                                            allSelected
                                                ? "Deselect all"
                                                : "Select all"
                                        }}
                                    </button>
                                    <MultiSelectItem
                                        v-for="o in teamOptions"
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
            <Button variant="secondary" @click="emit('update:open', false)"
                >Cancel</Button
            >
            <Button variant="primary" @click="submit">Send invite</Button>
        </ModalFooter>
    </Modal>
</template>
