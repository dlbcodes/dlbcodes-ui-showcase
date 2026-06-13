<script setup lang="ts">
import { ref } from "vue";
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    Button,
    Badge,
    Kbd,
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
    Textarea,
} from "@dlbcodes/my-design-system";
import {
    PhQuestion,
    PhScroll,
    PhKeyboard,
    PhChatCircle,
} from "@phosphor-icons/vue";
import BrandMark from "../BrandMark.vue";

const shortcutsOpen = ref(false);
const helpOpen = ref(false);

// Help form
const subject = ref("");
const message = ref("");
const sendHelp = (): void => {
    // (mock) — would submit to support here
    helpOpen.value = false;
    subject.value = "";
    message.value = "";
};

const shortcuts = [
    { keys: ["⌘", "K"], action: "Open command menu" },
    { keys: ["⌘", "/"], action: "Toggle sidebar" },
    { keys: ["G", "D"], action: "Go to Dashboard" },
    { keys: ["G", "T"], action: "Go to Team" },
    { keys: ["C"], action: "Create new project" },
    { keys: ["?"], action: "Show this help" },
];
</script>

<template>
    <Dropdown>
        <DropdownTrigger>
            <Button
                variant="secondary"
                size="icon-sm"
                aria-label="Help and shortcuts"
            >
                <PhQuestion class="size-6" />
            </Button>
        </DropdownTrigger>
        <DropdownContent size="3xs">
            <DropdownItem disabled>
                <PhScroll class="size-4" />
                Changelog
                <Badge class="ml-auto">Soon</Badge>
            </DropdownItem>
            <DropdownItem @click="shortcutsOpen = true">
                <PhKeyboard class="size-4" />
                Shortcuts
            </DropdownItem>
            <DropdownItem @click="helpOpen = true">
                <PhChatCircle class="size-4" />
                Help
            </DropdownItem>
        </DropdownContent>
    </Dropdown>

    <!-- Shortcuts modal -->
    <Modal v-model="shortcutsOpen" size="md">
        <ModalHeader>
            <ModalTitle>Keyboard shortcuts</ModalTitle>
            <ModalDescription
                >Move faster with these shortcuts.</ModalDescription
            >
            <ModalClose />
        </ModalHeader>
        <ModalContent>
            <div class="flex flex-col">
                <div
                    v-for="s in shortcuts"
                    :key="s.action"
                    class="flex items-center justify-between border-b border-border-subtle py-2.5 last:border-b-0"
                >
                    <span class="text-sm text-text-secondary">{{
                        s.action
                    }}</span>
                    <span class="flex items-center gap-1">
                        <Kbd v-for="k in s.keys" :key="k">{{ k }}</Kbd>
                    </span>
                </div>
            </div>
        </ModalContent>
    </Modal>

    <!-- Help modal -->
    <Modal v-model="helpOpen" size="md">
        <ModalHeader>
            <ModalTitle>
                <span class="flex items-center gap-2">
                    <BrandMark />
                </span>
            </ModalTitle>
            <ModalDescription>
                Have a question or need a hand? Send us a message and we'll get
                back to you.
            </ModalDescription>
            <ModalClose />
        </ModalHeader>
        <ModalContent>
            <div class="flex flex-col gap-4">
                <Field required>
                    <FieldLabel>Subject</FieldLabel>
                    <FieldContent>
                        <Input
                            v-model="subject"
                            variant="contrast"
                            placeholder="What's this about?"
                        />
                    </FieldContent>
                </Field>
                <Field required>
                    <FieldLabel>Message</FieldLabel>
                    <FieldContent>
                        <Textarea
                            v-model="message"
                            variant="contrast"
                            placeholder="Tell us what's going on…"
                        />
                    </FieldContent>
                </Field>
            </div>
        </ModalContent>
        <ModalFooter>
            <Button variant="secondary" @click="helpOpen = false"
                >Cancel</Button
            >
            <Button variant="primary" @click="sendHelp">Send message</Button>
        </ModalFooter>
    </Modal>
</template>
