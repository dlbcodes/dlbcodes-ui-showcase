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
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Button,
} from "@dlbcodes/my-design-system";
import type { Member } from "../../types/team";

const props = defineProps<{
    open: boolean;
    member: Member | null;
}>();
const emit = defineEmits<{
    (e: "update:open", value: boolean): void;
    (e: "save", member: Member, role: string): void;
}>();

const role = ref<string>("Member");

// Seed the select with the member's current role whenever the modal opens.
watch(
    () => props.open,
    (isOpen) => {
        if (isOpen && props.member) role.value = props.member.role;
    },
);

const save = (): void => {
    if (props.member) emit("save", props.member, role.value);
    emit("update:open", false);
};
</script>

<template>
    <Modal
        :model-value="open"
        size="md"
        @update:model-value="emit('update:open', $event)"
    >
        <ModalHeader>
            <ModalTitle>Change role</ModalTitle>
            <ModalDescription
                >Update {{ member?.name }}'s role on the team.</ModalDescription
            >
            <ModalClose />
        </ModalHeader>
        <ModalContent>
            <Field>
                <FieldLabel>Role</FieldLabel>
                <FieldContent>
                    <Select v-model="role">
                        <SelectTrigger
                            variant="contrast"
                            placeholder="Select a role"
                        />
                        <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Member">Member</SelectItem>
                        </SelectContent>
                    </Select>
                </FieldContent>
            </Field>
        </ModalContent>
        <ModalFooter>
            <Button variant="secondary" @click="emit('update:open', false)"
                >Cancel</Button
            >
            <Button variant="primary" @click="save">Save</Button>
        </ModalFooter>
    </Modal>
</template>
