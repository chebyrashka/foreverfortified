<script setup lang="ts">
import { computed } from "vue";
import { brandIcons } from "@/data/iconLibrary";

const props = withDefaults(
  defineProps<{
    name: string;
    title?: string;
    size?: number | string;
  }>(),
  {
    size: 24
  }
);

const icon = computed(() => brandIcons.find((item) => item.name === props.name) || brandIcons[0]);
const iconSize = computed(() => (typeof props.size === "number" ? `${props.size}px` : props.size));
</script>

<template>
  <svg
    class="brand-icon"
    viewBox="0 0 24 24"
    fill="none"
    :role="title ? 'img' : undefined"
    :aria-hidden="title ? undefined : true"
    :style="{ width: iconSize, height: iconSize }"
  >
    <title v-if="title">{{ title }}</title>
    <path v-for="path in icon.paths" :key="path" :d="path" />
  </svg>
</template>

<style scoped>
.brand-icon {
  display: block;
  overflow: visible;
  color: currentColor;
}

.brand-icon path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
  vector-effect: non-scaling-stroke;
}
</style>
