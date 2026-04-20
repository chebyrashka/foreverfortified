<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}>();
</script>

<template>
  <section class="sb-hero">
    <img v-if="image" class="sb-hero__image" :src="image" :alt="title" />
    <div class="sb-hero__shade" aria-hidden="true" />
    <div class="container sb-hero__content">
      <p v-if="eyebrow" class="sb-hero__eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="text" class="sb-hero__text">{{ text }}</p>
      <div class="button-row">
        <a v-if="primaryCtaLabel && primaryCtaHref" class="btn btn-primary" :href="primaryCtaHref">
          {{ primaryCtaLabel }}
        </a>
        <a v-if="secondaryCtaLabel && secondaryCtaHref" class="btn btn-light" :href="secondaryCtaHref">
          {{ secondaryCtaLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sb-hero {
  position: relative;
  min-height: 78svh;
  background: var(--color-iron);
  color: var(--color-white);
}

.sb-hero__image,
.sb-hero__shade {
  position: absolute;
  inset: 0;
}

.sb-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sb-hero__shade {
  background: linear-gradient(90deg, rgb(16 19 17 / 0.86), rgb(16 19 17 / 0.4), rgb(16 19 17 / 0.12));
}

.sb-hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  min-height: 78svh;
  align-content: center;
  max-width: 860px;
}

.sb-hero__eyebrow {
  color: var(--color-stone);
  font-family: var(--font-heading);
  font-weight: 850;
  text-transform: uppercase;
}

.sb-hero h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(3rem, 7vw, 7rem);
  font-weight: var(--font-display-weight);
  line-height: 0.92;
}

.sb-hero__text {
  max-width: 62ch;
  margin: var(--size-5) 0 var(--size-8);
  color: rgb(255 255 255 / 0.82);
  font-size: 1.14rem;
}
</style>
