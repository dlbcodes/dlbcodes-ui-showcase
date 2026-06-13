<script setup lang="ts">
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalFooter,
    ModalClose,
    Button,
} from "@dlbcodes/my-design-system";
import type { Member } from "../../types/team";

defineProps<{ open: boolean; member: Member | null }>();
const emit = defineEmits<{
    (e: "update:open", value: boolean): void;
    (e: "confirm", member: Member): void;
}>();

const confirm = (member: Member | null): void => {
    if (member) emit("confirm", member);
    emit("update:open", false);
};
</script>

<template>
    <Modal
        :model-value="open"
        size="sm"
        @update:model-value="emit('update:open', $event)"
    >
        <ModalHeader>
            <ModalTitle>Remove member</ModalTitle>
            <ModalDescription>
                Remove {{ member?.name }} from the team? This can't be undone.
            </ModalDescription>
            <ModalClose />
        </ModalHeader>
        <ModalFooter>
            <Button variant="secondary" @click="emit('update:open', false)"
                >Cancel</Button
            >
            <Button variant="destructive" @click="confirm(member)"
                >Remove</Button
            >
        </ModalFooter>
    </Modal>
</template>
