<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}>();
</script>

<template>
  <section class="sb-cta">
    <div class="container sb-cta__inner">
      <div>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
      </div>
      <a v-if="ctaLabel && ctaHref" class="btn btn-primary" :href="ctaHref">
        {{ ctaLabel }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.sb-cta {
  background: var(--color-iron);
  color: var(--color-white);
  padding-block: clamp(3rem, 6vw, 5rem);
}

.sb-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-8);
}

h2 {
  max-width: 820px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 4.4rem);
  font-weight: var(--font-heading-weight);
  line-height: 0.98;
}

p:not(.eyebrow) {
  max-width: 58ch;
  color: rgb(247 243 236 / 0.74);
}

@media (max-width: 720px) {
  .sb-cta__inner {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
