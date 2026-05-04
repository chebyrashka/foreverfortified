<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    items: Array<{
      quote: string;
      name?: string;
      meta?: string;
    }>;
  }>(),
  {
    eyebrow: "Homeowner proof",
    title: "The kind of work people are happy to recommend."
  }
);
</script>

<template>
  <section class="section sb-testimonials">
    <div class="container">
      <div class="sb-testimonials__heading">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h2 class="section-title">{{ title }}</h2>
      </div>
      <div class="sb-testimonials__grid">
        <figure v-for="item in items" :key="item.quote">
          <blockquote>{{ item.quote }}</blockquote>
          <figcaption>
            <strong>{{ item.name || "Homeowner" }}</strong>
            <span v-if="item.meta">{{ item.meta }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sb-testimonials {
  background: var(--color-stone-light);
}

.sb-testimonials__heading {
  max-width: 820px;
  margin: 0 auto var(--size-10);
  text-align: center;
}

.sb-testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

figure {
  display: grid;
  align-content: space-between;
  min-width: 0;
  min-height: 300px;
  margin: 0;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

blockquote {
  min-width: 0;
  margin: 0;
  color: var(--color-iron);
  font-family: var(--font-quote);
  font-size: clamp(1.24rem, 2vw, 1.65rem);
  line-height: 1.2;
}

figcaption {
  display: grid;
  gap: var(--size-1);
  margin-top: var(--size-8);
}

figcaption strong {
  font-family: var(--font-heading);
}

figcaption span {
  color: rgb(31 36 33 / 0.62);
}

@media (max-width: 1180px) {
  .sb-testimonials__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 860px) {
  .sb-testimonials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
