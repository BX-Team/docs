<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "Discord",
  components: { Icon },
});
</script>

<template>
  <a href="https://discord.gg/p7cxhw7E2M" target="_blank">
    <div class="discord-container">
      <Icon class="icon" icon="simple-icons:discord" width="2.2rem" />
      <span>Join our <br />Discord server</span>
    </div>
  </a>
</template>

<style scoped>
>>> {
  --discord-color: #5662f6;
  --discord-color-hover: rgb(from var(--discord-color) r g b / 0.5);
}

.discord-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--vp-c-bg-alt);
  padding: 6px 3px;
  border-radius: 10px;

  transition: 0.3s;
}

.icon {
  color: var(--discord-color);
  transition: 0.3s;
}

span {
  font-size: 1.05rem;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  color: var(--vp-c-text-1);
  transition: 0.8s;
}

.discord-container:hover {
  box-shadow: 0 0 27px 0 var(--discord-color-hover);
}

.discord-container:hover .icon {
  scale: 1.05;
}

.discord-container:hover span {
  color: white;
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.76);
}
</style>
