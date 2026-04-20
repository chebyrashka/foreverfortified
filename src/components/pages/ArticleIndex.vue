<script setup lang="ts">
type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
};

defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <section class="article-index">
    <div class="container">
      <div class="article-index__hero">
        <p class="eyebrow">Articles</p>
        <h1>Homeowner guides for better exterior and remodel decisions.</h1>
        <p>
          Practical reading for roofing, siding, bathroom remodels, maintenance, and project planning.
        </p>
      </div>

      <div class="article-grid">
        <article v-for="article in articles" :key="article.slug" class="article-card">
          <img :src="article.image" :alt="article.title" />
          <div>
            <span>{{ article.category }} · {{ article.readTime }}</span>
            <h2>{{ article.title }}</h2>
            <p>{{ article.excerpt }}</p>
            <a :href="`/articles/${article.slug}/`">
              Read guide
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
.article-index {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.article-index__hero {
  max-width: 900px;
  margin-bottom: var(--size-12);
}

.article-index h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.8vw, 6.4rem);
  font-weight: var(--font-display-weight);
  line-height: 0.94;
}

.article-index__hero p:not(.eyebrow) {
  max-width: 62ch;
  margin: var(--size-5) 0 0;
  color: rgb(31 36 33 / 0.72);
  font-size: 1.14rem;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

.article-card {
  display: grid;
  overflow: hidden;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
}

.article-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.article-card div {
  display: grid;
  align-content: start;
  padding: var(--size-5);
}

.article-card span {
  color: var(--color-copper);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 850;
}

.article-card h2 {
  margin: var(--size-3) 0;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1.16;
}

.article-card p {
  margin: 0;
  color: rgb(31 36 33 / 0.7);
}

.article-card a {
  display: inline-flex;
  align-items: center;
  gap: var(--size-2);
  width: fit-content;
  margin-top: var(--size-5);
  color: var(--color-forest);
  font-family: var(--font-heading);
  font-weight: 850;
}

@media (max-width: 980px) {
  .article-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
</style>
