<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    category: string;
    location: string;
    text: string;
    image: string;
  };
}>();
</script>

<template>
  <section class="project-index">
    <div class="container project-index__hero">
      <p class="eyebrow">Recent work</p>
      <h1>Project stories that make the work easier to trust.</h1>
      <p>
        This page is ready for Storyblok project entries, galleries, before/after pairs, and service filters.
      </p>
    </div>
    <div class="container-wide project-card">
      <img :src="project.image" :alt="project.title" />
      <div>
        <p class="eyebrow">{{ project.category }}</p>
        <h2>{{ project.title }}</h2>
        <p>{{ project.text }}</p>
        <span>{{ project.location }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-index {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.project-index__hero {
  margin-bottom: var(--size-12);
}

.project-index h1 {
  max-width: 980px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.8vw, 6.4rem);
  line-height: 0.94;
}

.project-index__hero p:not(.eyebrow) {
  max-width: 62ch;
  color: rgb(31 36 33 / 0.72);
  font-size: 1.14rem;
}

.project-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--size-8);
  align-items: stretch;
}

.project-card img {
  width: 100%;
  min-height: 520px;
  object-fit: cover;
}

.project-card div {
  display: grid;
  align-content: center;
  background: var(--color-forest);
  color: var(--color-white);
  padding: clamp(2rem, 5vw, 4rem);
}

.project-card h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 4.2rem);
  line-height: 0.98;
}

.project-card p:not(.eyebrow) {
  color: rgb(247 243 236 / 0.76);
}

.project-card .eyebrow,
.project-card span {
  color: var(--color-stone);
}

@media (max-width: 860px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-card img {
    min-height: 340px;
  }
}
</style>
