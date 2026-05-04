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
        <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.sb-cta {
  background:
    linear-gradient(135deg, rgb(47 94 64 / 0.98), rgb(31 68 46 / 0.98)),
    var(--color-copper);
  color: var(--color-white);
  padding-block: clamp(3rem, 6vw, 5rem);
}

.sb-cta__inner {
  display: grid;
  gap: var(--size-8);
  justify-items: start;
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
  max-width: 56ch;
  margin: var(--size-4) 0 0;
  color: rgb(247 243 236 / 0.74);
}

.eyebrow {
  color: var(--color-white);
}

.btn-primary {
  width: min(100%, 560px);
  min-height: 58px;
  justify-content: flex-start;
  border: 0;
  border-top: 1px solid rgb(247 243 236 / 0.32);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--color-white);
  padding: var(--size-5) 0 0;
  transition:
    color var(--transition),
    padding-left var(--transition);
}

.btn-primary:hover {
  transform: none;
  background: transparent;
  color: var(--color-stone);
  padding-left: var(--size-2);
}

@media (max-width: 720px) {
  .sb-cta__inner {
    align-items: stretch;
  }
}
</style>
