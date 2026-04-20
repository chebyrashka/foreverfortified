<script setup lang="ts">
defineProps<{
  article: {
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
    image: string;
  };
  estimateUrl: string;
}>();
</script>

<template>
  <article class="article-detail">
    <header class="article-hero">
      <div class="container">
        <p class="eyebrow">{{ article.category }} · {{ article.readTime }}</p>
        <h1>{{ article.title }}</h1>
        <p>{{ article.excerpt }}</p>
      </div>
      <img :src="article.image" :alt="article.title" />
    </header>

    <section class="section">
      <div class="container article-body">
        <p>
          This is placeholder article body content for the first Astro pass. In Storyblok, this page should be driven by
          rich text blocks, images, callouts, and service-specific CTAs.
        </p>
        <h2>What homeowners should take away</h2>
        <p>
          The content should answer practical questions, explain tradeoffs clearly, and help the reader feel more
          prepared before requesting an estimate.
        </p>
        <a class="btn btn-primary" :href="estimateUrl">Request an Estimate</a>
      </div>
    </section>
  </article>
</template>

<style scoped>
.article-hero {
  padding-top: clamp(4rem, 8vw, 7rem);
}

.article-hero h1 {
  max-width: 980px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.8vw, 6.4rem);
  font-weight: var(--font-display-weight);
  line-height: 0.94;
}

.article-hero p:not(.eyebrow) {
  max-width: 66ch;
  margin: var(--size-5) 0 var(--size-10);
  color: rgb(31 36 33 / 0.72);
  font-size: 1.14rem;
}

.article-hero img {
  width: min(100% - (var(--gutter) * 2), var(--container-wide));
  max-height: 620px;
  margin-inline: auto;
  object-fit: cover;
}

.article-body {
  max-width: 760px;
}

.article-body p {
  color: rgb(31 36 33 / 0.76);
  font-size: 1.12rem;
}

.article-body h2 {
  margin-top: var(--size-10);
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: var(--font-heading-weight);
}
</style>
