<script setup lang="ts">
import { ref } from "vue";
import { Panel, PanelContent, Button } from "@dlbcodes/my-design-system";
import { PhPlus } from "@phosphor-icons/vue";
import type { Member } from "../../types/team";
import MemberRow from "../../components/team/MemberRow.vue";
import InviteMemberModal from "../../components/team/InviteMemberModal.vue";
import ChangeRoleModal from "../../components/team/ChangeRoleModal.vue";
import RemoveMemberModal from "../../components/team/RemoveMemberModal.vue";

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
        src: "https://i.pravatar.cc/120?img=6",
        role: "Member",
        status: "Active",
    },
    {
        id: "3",
        name: "John Carter",
        email: "john@example.com",
        src: "https://i.pravatar.cc/120?img=3",
        role: "Member",
        status: "Invited",
    },
]);

// Invite
const inviteOpen = ref(false);
const onInvite = (payload: {
    email: string;
    role: string;
    teams: string[];
}): void => {
    // (mock) add the invited member as "Invited"
    members.value.push({
        id: String(Date.now()),
        name: payload.email.split("@")[0],
        email: payload.email,
        src: null,
        role: payload.role as Member["role"],
        status: "Invited",
    });
};

// Change role
const roleOpen = ref(false);
const roleTarget = ref<Member | null>(null);
const askChangeRole = (member: Member): void => {
    roleTarget.value = member;
    roleOpen.value = true;
};
const applyRole = (member: Member, role: string): void => {
    const m = members.value.find((x) => x.id === member.id);
    if (m) m.role = role as Member["role"];
};

// Remove
const removeOpen = ref(false);
const removeTarget = ref<Member | null>(null);
const askRemove = (member: Member): void => {
    removeTarget.value = member;
    removeOpen.value = true;
};
const applyRemove = (member: Member): void => {
    members.value = members.value.filter((m) => m.id !== member.id);
};
</script>

<template>
    <!-- Page action teleported into the layout's sticky title bar -->
    <Teleport defer to="#page-actions">
        <Button variant="primary" size="sm" @click="inviteOpen = true">
            <PhPlus class="size-4" /> Invite member
        </Button>
    </Teleport>

    <div class="flex flex-col gap-6">
        <Panel class="overflow-visible">
            <PanelContent class="overflow-visible">
                <MemberRow
                    v-for="member in members"
                    :key="member.id"
                    :member="member"
                    @change-role="askChangeRole"
                    @remove="askRemove"
                />
            </PanelContent>
        </Panel>

        <InviteMemberModal v-model:open="inviteOpen" @invite="onInvite" />
        <ChangeRoleModal
            v-model:open="roleOpen"
            :member="roleTarget"
            @save="applyRole"
        />
        <RemoveMemberModal
            v-model:open="removeOpen"
            :member="removeTarget"
            @confirm="applyRemove"
        />
    </div>
</template>
