<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  imagePosition?: "left" | "right";
}>();
</script>

<template>
  <section class="section sb-feature" :class="{ 'sb-feature--reverse': imagePosition === 'right' }">
    <div class="container-wide sb-feature__grid">
      <img v-if="image" :src="image" :alt="title" />
      <div class="sb-feature__copy">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sb-feature {
  background: var(--color-stone-light);
}

.sb-feature__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

.sb-feature--reverse img {
  order: 2;
}

img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 4.6rem);
  font-weight: var(--font-heading-weight);
  line-height: 0.98;
}

.sb-feature__copy > p:not(.eyebrow) {
  color: rgb(31 36 33 / 0.72);
  font-size: 1.1rem;
}

@media (max-width: 860px) {
  .sb-feature__grid {
    grid-template-columns: 1fr;
  }

  .sb-feature--reverse img {
    order: 0;
  }
}
</style>
