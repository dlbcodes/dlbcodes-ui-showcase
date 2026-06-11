<script setup lang="ts">
import { ref } from "vue";
import {
    Panel,
    PanelContent,
    Avatar,
    Badge,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalContent,
    ModalFooter,
    ModalClose,
    MultiSelect,
    MultiSelectTrigger,
    MultiSelectContent,
    MultiSelectItem,
} from "@dlbcodes/my-design-system";
import {
    PhPencilSimple,
    PhUserGear,
    PhTrash,
    PhPlus,
} from "@phosphor-icons/vue";

interface Member {
    id: string;
    name: string;
    email: string;
    src: string | null;
    role: "Admin" | "Member";
    status: "Active" | "Invited";
}

const members = ref<Member[]>([
    {
        id: "1",
        name: "Daniel Lobo",
        email: "daniel@example.com",
        src: "https://i.pravatar.cc/120?img=2",
        role: "Admin",
        status: "Active",
    },
    {
        id: "2",
        name: "Ana Silva",
        email: "ana@example.com",
        src: "https://i.pravatar.cc/120?img=2",
        role: "Member",
        status: "Active",
    },
    {
        id: "3",
        name: "John Carter",
        email: "john@example.com",
        src: "https://i.pravatar.cc/120?img=2",
        role: "Member",
        status: "Invited",
    },
]);

// Remove-confirmation modal
const removeOpen = ref(false);
const pendingRemove = ref<Member | null>(null);

const askRemove = (member: Member): void => {
    pendingRemove.value = member;
    removeOpen.value = true;
};

const confirmRemove = (): void => {
    if (pendingRemove.value) {
        members.value = members.value.filter(
            (m) => m.id !== pendingRemove.value!.id,
        );
    }
    removeOpen.value = false;
    pendingRemove.value = null;
};

// Invite modal with MultiSelect for teams
const inviteOpen = ref(false);
const inviteTeams = ref<string[]>([]);
const teamOptions = [
    { value: "eng", label: "Engineering" },
    { value: "design", label: "Design" },
    { value: "product", label: "Product" },
    { value: "marketing", label: "Marketing" },
];
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-semibold text-text-primary">Team</h1>
                <p class="mt-1 text-sm text-text-secondary">
                    Manage your team members and their roles.
                </p>
            </div>
            <Button variant="primary" @click="inviteOpen = true">
                <PhPlus class="size-4" />
                Invite member
            </Button>
        </div>

        <!-- Members list (hand-built rows + tokens; no Table component) -->
        <Panel class="overflow-visible">
            <PanelContent class="overflow-visible">
                <div
                    v-for="member in members"
                    :key="member.id"
                    class="flex items-center gap-4 border-b border-border-subtle px-4 py-4 last:border-b-0"
                >
                    <Avatar :name="member.name" :src="member.src" />
                    <div class="min-w-0 flex-1">
                        <p
                            class="truncate text-sm font-medium text-text-primary"
                        >
                            {{ member.name }}
                        </p>
                        <p class="truncate text-sm text-text-secondary">
                            {{ member.email }}
                        </p>
                    </div>

                    <Badge
                        :variant="
                            member.role === 'Admin' ? 'primary' : 'neutral'
                        "
                    >
                        {{ member.role }}
                    </Badge>
                    <Badge
                        :variant="
                            member.status === 'Active' ? 'success' : 'pending'
                        "
                    >
                        {{ member.status }}
                    </Badge>

                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Member actions"
                                >⋯</Button
                            >
                        </DropdownTrigger>
                        <DropdownContent size="xs">
                            <DropdownItem>
                                <PhPencilSimple class="size-4" />
                                Edit
                            </DropdownItem>
                            <DropdownItem>
                                <PhUserGear class="size-4" />
                                Change role
                            </DropdownItem>
                            <DropdownItem @select="askRemove(member)">
                                <PhTrash class="size-4" />
                                Remove
                            </DropdownItem>
                        </DropdownContent>
                    </Dropdown>
                </div>
            </PanelContent>
        </Panel>

        <!-- Remove confirmation -->
        <Modal v-model="removeOpen" size="sm">
            <ModalHeader>
                <ModalTitle>Remove member</ModalTitle>
                <ModalDescription>
                    Remove {{ pendingRemove?.name }} from the team? This can't
                    be undone.
                </ModalDescription>
                <ModalClose />
            </ModalHeader>
            <ModalFooter>
                <Button variant="ghost" @click="removeOpen = false"
                    >Cancel</Button
                >
                <Button variant="destructive" @click="confirmRemove"
                    >Remove</Button
                >
            </ModalFooter>
        </Modal>

        <!-- Invite modal with MultiSelect -->
        <Modal v-model="inviteOpen" size="md">
            <ModalHeader>
                <ModalTitle>Invite a member</ModalTitle>
                <ModalDescription
                    >Choose which teams they'll join.</ModalDescription
                >
                <ModalClose />
            </ModalHeader>
            <ModalContent>
                <MultiSelect
                    v-model="inviteTeams"
                    :options="teamOptions"
                    placeholder="Select teams"
                >
                    <template
                        #default="{ label, empty, toggleAll, allSelected }"
                    >
                        <MultiSelectTrigger :label="label" :empty="empty" />
                        <MultiSelectContent>
                            <button
                                type="button"
                                class="mb-1 w-full rounded-lg px-3 py-2 text-left text-sm text-text-secondary hover:bg-bg-surface"
                                @click="toggleAll"
                            >
                                {{
                                    allSelected ? "Deselect all" : "Select all"
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
            </ModalContent>
            <ModalFooter>
                <Button variant="ghost" @click="inviteOpen = false"
                    >Cancel</Button
                >
                <Button variant="primary" @click="inviteOpen = false"
                    >Send invite</Button
                >
            </ModalFooter>
        </Modal>
    </div>
</template>
