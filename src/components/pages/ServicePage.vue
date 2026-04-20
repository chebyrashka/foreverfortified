<script setup lang="ts">
type Service = {
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  image: string;
  highlights: string[];
  problems: string[];
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
};

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
};

defineProps<{
  service: Service;
  testimonials: Testimonial[];
  estimateUrl: string;
}>();
</script>

<template>
  <article class="service-page">
    <section class="service-hero">
      <div class="service-hero__image">
        <img :src="service.image" :alt="service.headline" />
      </div>
      <div class="service-hero__copy">
        <p class="eyebrow">{{ service.eyebrow }}</p>
        <h1>{{ service.headline }}</h1>
        <p>{{ service.summary }}</p>
        <div class="button-row">
          <a class="btn btn-primary" :href="estimateUrl">
            Request an Estimate
            <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </a>
          <a class="btn btn-secondary" href="#faq">Read FAQs</a>
        </div>
      </div>
    </section>

    <section class="section service-intro">
      <div class="container intro-grid">
        <div>
          <p class="eyebrow">What this solves</p>
          <h2 class="section-title">A clearer way to move from concern to confident next step.</h2>
        </div>
        <div class="problem-list">
          <div v-for="problem in service.problems" :key="problem">
            <span aria-hidden="true" />
            <p>{{ problem }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section benefits">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">What to expect</p>
          <h2 class="section-title">Practical recommendations and work that respects the home.</h2>
        </div>
        <div class="benefit-grid">
          <article v-for="benefit in service.benefits" :key="benefit">
            <h3>{{ benefit }}</h3>
            <p>
              The page can expand this point with real project proof, materials, and photos once the Storyblok content
              model is connected.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section image-band">
      <div class="container-wide image-band__grid">
        <img :src="service.image" :alt="`${service.title} detail`" />
        <div>
          <p class="eyebrow">{{ service.title }} details</p>
          <h2>Built for the actual way your home is used.</h2>
          <p>
            The best service pages should feel useful before a homeowner even reaches out. This section can hold
            material guidance, common decisions, timelines, and project-specific proof.
          </p>
        </div>
      </div>
    </section>

    <section class="section service-testimonials">
      <div class="container">
        <div class="section-heading section-heading--center">
          <p class="eyebrow">Customer perspective</p>
          <h2 class="section-title">Proof from homeowners who needed the work done clearly.</h2>
        </div>
        <div class="testimonial-grid">
          <figure v-for="testimonial in testimonials.slice(0, 2)" :key="testimonial.quote">
            <blockquote>{{ testimonial.quote }}</blockquote>
            <figcaption>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.service }} · {{ testimonial.location }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="faq" class="section faq">
      <div class="container faq-grid">
        <div>
          <p class="eyebrow">Questions</p>
          <h2 class="section-title">Common things homeowners ask before starting.</h2>
        </div>
        <div class="faq-list">
          <details v-for="item in service.faqs" :key="item.question" open>
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="service-cta">
      <div class="container service-cta__inner">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Tell us what is happening with your {{ service.title.toLowerCase() }} project.</h2>
        </div>
        <a class="btn btn-primary" :href="estimateUrl">Request an Estimate</a>
      </div>
    </section>
  </article>
</template>

<style scoped>
.service-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  min-height: calc(88svh - var(--header-height));
  background: var(--color-warm-white);
}

.service-hero__image img {
  width: 100%;
  height: 100%;
  min-height: 560px;
  object-fit: cover;
}

.service-hero__copy {
  display: grid;
  align-content: center;
  padding: clamp(2rem, 7vw, 6rem);
}

.service-hero h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.6vw, 6.2rem);
  font-weight: 900;
  line-height: 0.94;
}

.service-hero__copy > p:not(.eyebrow) {
  max-width: 58ch;
  margin: var(--size-5) 0 var(--size-8);
  color: rgb(31 36 33 / 0.75);
  font-size: 1.12rem;
}

.intro-grid,
.faq-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
}

.problem-list {
  display: grid;
  gap: var(--size-3);
}

.problem-list div {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--size-4);
  align-items: start;
  border-bottom: 1px solid rgb(31 36 33 / 0.12);
  padding-block: var(--size-4);
}

.problem-list span {
  width: 0.7rem;
  height: 0.7rem;
  margin-top: 0.46rem;
  border-radius: 50%;
  background: var(--color-copper);
}

.problem-list p {
  margin: 0;
  color: var(--color-graphite);
  font-size: 1.08rem;
  font-weight: 700;
}

.benefits,
.service-testimonials {
  background: var(--color-stone-light);
}

.section-heading {
  max-width: 820px;
  margin-bottom: var(--size-10);
}

.section-heading--center {
  margin-inline: auto;
  text-align: center;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

.benefit-grid article {
  min-height: 260px;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

.benefit-grid h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1.14;
}

.benefit-grid p {
  margin: var(--size-4) 0 0;
  color: rgb(31 36 33 / 0.68);
}

.image-band {
  background: var(--color-forest);
  color: var(--color-white);
}

.image-band__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

.image-band img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.image-band h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 4.5rem);
  line-height: 0.98;
}

.image-band p:not(.eyebrow) {
  color: rgb(247 243 236 / 0.76);
}

.image-band .eyebrow {
  color: var(--color-stone);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--size-5);
}

figure {
  display: grid;
  align-content: space-between;
  min-height: 300px;
  margin: 0;
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

blockquote {
  margin: 0;
  font-family: var(--font-quote);
  font-size: clamp(1.25rem, 2vw, 1.75rem);
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

.faq-list {
  display: grid;
  gap: var(--size-3);
}

details {
  border: 1px solid rgb(31 36 33 / 0.12);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-5);
}

summary {
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 850;
}

details p {
  margin: var(--size-4) 0 0;
  color: rgb(31 36 33 / 0.72);
}

.service-cta {
  background: var(--color-iron);
  color: var(--color-white);
  padding-block: clamp(3rem, 6vw, 5rem);
}

.service-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-8);
}

.service-cta h2 {
  max-width: 760px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 4.2rem);
  line-height: 0.98;
}

@media (max-width: 920px) {
  .service-hero,
  .intro-grid,
  .faq-grid,
  .image-band__grid,
  .benefit-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .service-hero__image img {
    min-height: 380px;
  }

  .service-hero__copy {
    padding-inline: var(--gutter);
  }
}

@media (max-width: 680px) {
  .service-cta__inner {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
