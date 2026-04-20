<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title?: string;
  text?: string;
  items: Array<{
    title: string;
    text: string;
    image?: string;
    href?: string;
    ctaLabel?: string;
  }>;
}>();
</script>

<template>
  <section class="section sb-services">
    <div class="container">
      <div class="sb-services__heading">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2 v-if="title" class="section-title">{{ title }}</h2>
        <p v-if="text" class="section-copy">{{ text }}</p>
      </div>
      <div class="sb-services__grid">
        <article v-for="item in items" :key="item.title">
          <img v-if="item.image" :src="item.image" :alt="item.title" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <a v-if="item.href" :href="item.href">
              {{ item.ctaLabel || "Learn more" }}
              <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sb-services__heading {
  max-width: 820px;
  margin-bottom: var(--size-10);
}

.sb-services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

article {
  overflow: hidden;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
}

img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

article div {
  padding: var(--size-5);
}

h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
}

p {
  color: rgb(31 36 33 / 0.72);
}

a {
  display: inline-flex;
  align-items: center;
  gap: var(--size-2);
  color: var(--color-forest);
  font-family: var(--font-heading);
  font-weight: 850;
}

@media (max-width: 860px) {
  .sb-services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
