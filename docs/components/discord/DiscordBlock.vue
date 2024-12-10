<script setup lang="ts">
import DiscordButton from "./DiscordButton.vue";
</script>

<template>
    <div class="discord">
        <p class="discord-info">
            If you have any questions, feel free to join our Discord server and
            ask there.
        </p>

        <DiscordButton />
    </div>
</template>

<script lang="ts">
export default {
    name: "Discord",
};
</script>

<style scoped>
.discord {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    padding: 20px;
}

.discord-info {
    font-size: 0.9em;
    color: var(--vp-c-text-3);
    line-height: 1.15em;
}
</style>
