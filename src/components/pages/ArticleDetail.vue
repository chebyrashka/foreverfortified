<script setup lang="ts">
import CtaBandBlock from "@/components/blocks/CtaBandBlock.vue";

const props = defineProps<{
  article: {
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
    image: string;
    intro?: string[];
    sections?: Array<{
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
    closing?: string[];
  };
  estimateUrl: string;
}>();

const servicePromos: Record<string, { eyebrow: string; title: string; text: string; href: string; cta: string }> = {
  Roofing: {
    eyebrow: "Roofing help",
    title: "Ready for a roof that holds up when the weather turns?",
    text: "Explore roof repair, replacement, and material options planned around Minnesota homes.",
    href: "/roofing/",
    cta: "Explore Roofing"
  },
  Siding: {
    eyebrow: "Siding help",
    title: "Make the outside of your home feel finished again.",
    text: "See how siding, trim, and exterior details can clean up curb appeal and improve long-term protection.",
    href: "/siding/",
    cta: "Explore Siding"
  },
  "Bathroom Remodel": {
    eyebrow: "Bathroom help",
    title: "Turn a frustrating bathroom into a room that works every day.",
    text: "Explore shower updates, bathroom refreshes, storage, finishes, and practical remodel planning.",
    href: "/bathroom-remodel/",
    cta: "Explore Bathroom Remodels"
  }
};

const servicePromo = servicePromos[props.article.category] || servicePromos.Roofing;
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

    <section class="section article-content">
      <div class="container article-body">
        <div v-if="article.intro?.length" class="article-intro">
          <p v-for="paragraph in article.intro" :key="paragraph">{{ paragraph }}</p>
        </div>
        <section v-for="section in article.sections" :key="section.title" class="article-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.bullets?.length">
            <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </section>
        <div v-if="article.closing?.length" class="article-closing">
          <p v-for="paragraph in article.closing" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </section>

    <section class="article-service-promo">
      <div class="container article-service-promo__inner">
        <div>
          <p class="eyebrow">{{ servicePromo.eyebrow }}</p>
          <h2>{{ servicePromo.title }}</h2>
          <p>{{ servicePromo.text }}</p>
        </div>
        <a class="btn btn-secondary" :href="servicePromo.href">
          {{ servicePromo.cta }}
          <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>
      </div>
    </section>

    <CtaBandBlock
      eyebrow="Ready to get started?"
      title="Ready to fortify your home?"
      text="Tell us what you're planning. We'll get back to you within 24 hours with a clear next step — no pressure, no nonsense."
      cta-label="Request a Free Estimate"
      :cta-href="estimateUrl"
    />
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
  border-radius: 8px;
  object-fit: cover;
}

.article-content {
  padding-top: clamp(2rem, 4vw, 3.5rem);
}

.article-body {
  max-width: 760px;
}

.article-body p {
  color: rgb(31 36 33 / 0.76);
  font-size: 1.12rem;
  line-height: 1.72;
}

.article-body h2 {
  margin-top: var(--size-10);
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: var(--font-heading-weight);
}

.article-intro {
  margin-bottom: var(--size-10);
  padding-bottom: var(--size-8);
  border-bottom: 1px solid rgb(31 36 33 / 0.12);
}

.article-intro p:first-child {
  color: var(--color-iron);
  font-family: var(--font-quote);
  font-size: clamp(1.48rem, 2.25vw, 1.95rem);
  font-weight: 800;
  line-height: 1.35;
}

.article-section:first-child h2 {
  margin-top: 0;
}

.article-section + .article-section {
  margin-top: var(--size-10);
}

.article-body ul {
  display: grid;
  gap: var(--size-3);
  margin: var(--size-5) 0 0;
  padding: 0;
  list-style: none;
}

.article-body li {
  position: relative;
  padding-left: 1.35rem;
  color: rgb(31 36 33 / 0.76);
  font-size: 1.08rem;
  line-height: 1.55;
}

.article-body li::before {
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--color-forest);
  content: "";
}

.article-closing {
  margin-top: var(--size-12);
  padding-top: var(--size-8);
  border-top: 1px solid rgb(31 36 33 / 0.12);
}

.article-closing p {
  color: var(--color-iron);
  font-family: var(--font-quote);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.38;
}

.article-service-promo {
  padding-block: clamp(2.5rem, 5vw, 4.5rem);
  background: var(--color-stone-light);
}

.article-service-promo__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--size-8);
  align-items: end;
}

.article-service-promo h2 {
  max-width: 780px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: var(--font-heading-weight);
  line-height: 0.98;
}

.article-service-promo p:not(.eyebrow) {
  max-width: 58ch;
  margin: var(--size-4) 0 0;
  color: rgb(31 36 33 / 0.72);
  font-size: 1.08rem;
}

.article-service-promo .btn {
  white-space: nowrap;
}

@media (max-width: 760px) {
  .article-service-promo__inner {
    grid-template-columns: 1fr;
  }

  .article-service-promo .btn {
    width: fit-content;
    white-space: normal;
  }
}
</style>
