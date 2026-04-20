<script setup lang="ts">
type Service = {
  slug: string;
  title: string;
  href: string;
  headline: string;
  summary: string;
  image: string;
  cta: string;
  highlights: string[];
};

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
};

type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
};

defineProps<{
  company: {
    name: string;
    intro: string;
    heroImage: string;
    estimateUrl: string;
  };
  services: Service[];
  testimonials: Testimonial[];
  processSteps: Array<{ title: string; text: string }>;
  articles: Article[];
  featuredProject: {
    title: string;
    category: string;
    location: string;
    text: string;
    image: string;
  };
}>();
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <img class="hero__media" :src="company.heroImage" alt="A finished home exterior with a strong roofline" />
      <div class="hero__shade" aria-hidden="true" />
      <div class="hero__content container-wide">
        <div class="hero__copy">
          <p class="hero__eyebrow">Roofing. Siding. Bathroom remodels.</p>
          <h1>Exterior and remodeling work built to hold up.</h1>
          <p>{{ company.intro }}</p>
          <div class="button-row">
            <a class="btn btn-primary" :href="company.estimateUrl">
              Request a Free Estimate
              <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </a>
            <a class="btn btn-light" href="#services">
              Explore Services
              <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </a>
          </div>
        </div>
        <div class="hero__proof" aria-label="Company proof points">
          <div>
            <strong>3</strong>
            <span>Core home improvement specialties</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Clear next step from estimate to walkthrough</span>
          </div>
          <div>
            <strong>FF</strong>
            <span>Built around durable, practical recommendations</span>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip" aria-label="Trust signals">
      <div class="trust-strip__inner container-wide">
        <span>Locally focused</span>
        <span>Free estimates</span>
        <span>Roofing, siding, bathrooms</span>
        <span>Practical project guidance</span>
      </div>
    </section>

    <section id="services" class="section services">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Core specialties</p>
          <h2 class="section-title">Start with the part of your home that needs attention most.</h2>
          <p class="section-copy">
            Each service page is designed to help homeowners understand the work, the options, and the next clear step.
          </p>
        </div>

        <div class="service-grid">
          <article v-for="service in services" :key="service.slug" class="service-card">
            <img :src="service.image" :alt="`${service.title} project detail`" />
            <div class="service-card__body">
              <h3>{{ service.title }}</h3>
              <p>{{ service.summary }}</p>
              <ul>
                <li v-for="item in service.highlights" :key="item">{{ item }}</li>
              </ul>
              <a :href="service.href">
                {{ service.cta }}
                <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section why-band">
      <div class="container why-grid">
        <div>
          <p class="eyebrow">Why Forever Fortified</p>
          <h2 class="section-title">Built around the details homeowners notice.</h2>
        </div>
        <div class="why-copy">
          <p>
            The design should make the company feel specific: sturdy recommendations, clean communication, and work
            that respects the home before, during, and after the project.
          </p>
          <div class="why-list">
            <span>Weather-ready thinking</span>
            <span>Cleaner project communication</span>
            <span>Materials matched to long-term value</span>
            <span>Respect for the finished home</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-spotlight">
      <div class="container-wide spotlight-grid">
        <div class="spotlight-image">
          <img :src="featuredProject.image" :alt="featuredProject.title" />
        </div>
        <div class="spotlight-copy">
          <p class="eyebrow">{{ featuredProject.category }}</p>
          <h2>{{ featuredProject.title }}</h2>
          <p>{{ featuredProject.text }}</p>
          <span>{{ featuredProject.location }}</span>
          <a class="btn btn-secondary" href="/projects/">
            View Recent Work
            <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section class="section testimonials">
      <div class="container">
        <div class="section-heading section-heading--center">
          <p class="eyebrow">Homeowner proof</p>
          <h2 class="section-title">The kind of work people are comfortable recommending.</h2>
        </div>
        <div class="testimonial-grid">
          <figure v-for="testimonial in testimonials" :key="testimonial.quote">
            <blockquote>{{ testimonial.quote }}</blockquote>
            <figcaption>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.service }} · {{ testimonial.location }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section process">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2 class="section-title">A clear path from first call to final walkthrough.</h2>
        </div>
        <ol class="process-list">
          <li v-for="(step, index) in processSteps" :key="step.title">
            <span>{{ String(index + 1).padStart(2, "0") }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section articles-preview">
      <div class="container">
        <div class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">Homeowner guides</p>
            <h2 class="section-title">Helpful reading before you start a project.</h2>
          </div>
          <a class="btn btn-secondary" href="/articles/">
            Read Articles
            <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </a>
        </div>
        <div class="article-grid">
          <article v-for="article in articles" :key="article.slug" class="article-card">
            <img :src="article.image" :alt="article.title" />
            <div>
              <span>{{ article.category }} · {{ article.readTime }}</span>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <div class="container final-cta__inner">
        <div>
          <p class="eyebrow">Start here</p>
          <h2>Ready to fortify your home?</h2>
          <p>Tell us what you are planning and we will help you take the next clear step.</p>
        </div>
        <a class="btn btn-primary" :href="company.estimateUrl">
          Request a Free Estimate
          <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100svh - var(--header-height));
  background: var(--color-iron);
  color: var(--color-white);
}

.hero__media,
.hero__shade {
  position: absolute;
  inset: 0;
}

.hero__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__shade {
  background:
    linear-gradient(90deg, rgb(16 19 17 / 0.88), rgb(16 19 17 / 0.58) 42%, rgb(16 19 17 / 0.18)),
    linear-gradient(0deg, rgb(16 19 17 / 0.68), transparent 42%);
}

.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  min-height: calc(100svh - var(--header-height));
  align-items: end;
  gap: var(--size-10);
  padding-block: clamp(5rem, 9vw, 8rem) var(--size-8);
}

.hero__copy {
  max-width: 760px;
}

.hero__eyebrow {
  margin: 0 0 var(--size-4);
  color: var(--color-stone);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 850;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 850px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(3.1rem, 8.4vw, 7.4rem);
  font-weight: 900;
  line-height: 0.91;
}

.hero__copy > p:not(.hero__eyebrow) {
  max-width: 650px;
  margin: var(--size-5) 0 var(--size-8);
  color: rgb(255 255 255 / 0.82);
  font-size: clamp(1.08rem, 1.7vw, 1.3rem);
}

.hero__proof {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 0.18);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.12);
  backdrop-filter: blur(16px);
}

.hero__proof div {
  min-height: 112px;
  padding: var(--size-5);
  background: rgb(16 19 17 / 0.42);
}

.hero__proof strong {
  display: block;
  color: var(--color-warm-white);
  font-family: var(--font-heading);
  font-size: 1.5rem;
}

.hero__proof span {
  display: block;
  max-width: 24ch;
  margin-top: var(--size-2);
  color: rgb(247 243 236 / 0.72);
  font-size: 0.9rem;
}

.trust-strip {
  border-bottom: 1px solid rgb(31 36 33 / 0.1);
  background: var(--color-warm-white);
}

.trust-strip__inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.trust-strip span {
  display: grid;
  min-height: 78px;
  place-items: center;
  border-left: 1px solid rgb(31 36 33 / 0.1);
  color: var(--color-graphite);
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 800;
  text-align: center;
}

.trust-strip span:last-child {
  border-right: 1px solid rgb(31 36 33 / 0.1);
}

.section-heading {
  max-width: 820px;
  margin-bottom: var(--size-10);
}

.section-heading--center {
  margin-inline: auto;
  text-align: center;
}

.section-heading--split {
  display: flex;
  max-width: none;
  align-items: end;
  justify-content: space-between;
  gap: var(--size-8);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

.service-card {
  overflow: hidden;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
}

.service-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.service-card__body {
  padding: var(--size-5);
}

.service-card h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.35rem;
}

.service-card p {
  margin: var(--size-3) 0;
  color: rgb(31 36 33 / 0.72);
}

.service-card ul {
  display: grid;
  gap: var(--size-2);
  margin: var(--size-5) 0;
  padding: 0;
  list-style: none;
}

.service-card li {
  display: flex;
  gap: var(--size-2);
  color: var(--color-graphite);
  font-weight: 700;
}

.service-card li::before {
  width: 0.48rem;
  height: 0.48rem;
  flex: 0 0 auto;
  margin-top: 0.45rem;
  border-radius: 50%;
  background: var(--color-copper);
  content: "";
}

.service-card a {
  display: inline-flex;
  align-items: center;
  gap: var(--size-2);
  color: var(--color-forest);
  font-family: var(--font-heading);
  font-weight: 850;
}

.why-band {
  background: var(--color-stone-light);
}

.why-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
}

.why-copy p {
  margin: 0;
  color: rgb(31 36 33 / 0.78);
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
}

.why-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--size-3);
  margin-top: var(--size-8);
}

.why-list span {
  border-left: 3px solid var(--color-copper);
  background: rgb(255 255 255 / 0.6);
  padding: var(--size-4);
  font-family: var(--font-heading);
  font-weight: 800;
}

.project-spotlight {
  background: var(--color-warm-white);
}

.spotlight-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
  gap: var(--size-8);
  align-items: stretch;
}

.spotlight-image img {
  width: 100%;
  height: 100%;
  min-height: 520px;
  object-fit: cover;
}

.spotlight-copy {
  display: grid;
  align-content: center;
  background: var(--color-forest);
  color: var(--color-white);
  padding: clamp(2rem, 5vw, 4rem);
}

.spotlight-copy h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 4.2rem);
  line-height: 0.98;
}

.spotlight-copy p:not(.eyebrow) {
  margin: var(--size-5) 0 0;
  color: rgb(247 243 236 / 0.78);
}

.spotlight-copy span {
  margin-block: var(--size-5);
  color: var(--color-stone);
  font-weight: 800;
}

.spotlight-copy .eyebrow {
  color: var(--color-stone);
}

.spotlight-copy .btn {
  width: fit-content;
}

.testimonials {
  background: var(--color-stone-light);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

figure {
  display: grid;
  align-content: space-between;
  min-height: 320px;
  margin: 0;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

blockquote {
  margin: 0;
  color: var(--color-iron);
  font-family: var(--font-quote);
  font-size: clamp(1.25rem, 2vw, 1.7rem);
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

.process-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin: 0;
  padding: 0;
  background: rgb(31 36 33 / 0.12);
  list-style: none;
}

.process-list li {
  min-height: 250px;
  background: var(--color-white);
  padding: var(--size-5);
}

.process-list span {
  display: block;
  color: var(--color-copper);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 900;
}

.process-list h3 {
  margin: var(--size-10) 0 var(--size-3);
  font-family: var(--font-heading);
  font-size: 1.25rem;
}

.process-list p {
  margin: 0;
  color: rgb(31 36 33 / 0.7);
}

.articles-preview {
  background: var(--color-warm-white);
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
}

.article-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.article-card div {
  padding: var(--size-5);
}

.article-card span {
  color: var(--color-copper);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 850;
}

.article-card h3 {
  margin: var(--size-3) 0;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  line-height: 1.2;
}

.article-card p {
  margin: 0;
  color: rgb(31 36 33 / 0.72);
}

.final-cta {
  background: var(--color-iron);
  color: var(--color-white);
  padding-block: clamp(3rem, 6vw, 5rem);
}

.final-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-8);
}

.final-cta h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4vw, 4.4rem);
  line-height: 0.98;
}

.final-cta p:not(.eyebrow) {
  max-width: 56ch;
  margin: var(--size-4) 0 0;
  color: rgb(247 243 236 / 0.74);
}

@media (max-width: 980px) {
  .service-grid,
  .testimonial-grid,
  .article-grid {
    grid-template-columns: 1fr 1fr;
  }

  .why-grid,
  .spotlight-grid {
    grid-template-columns: 1fr;
  }

  .process-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .hero__content {
    min-height: calc(92svh - var(--header-height));
  }

  .hero__proof,
  .trust-strip__inner,
  .service-grid,
  .testimonial-grid,
  .article-grid,
  .process-list,
  .why-list {
    grid-template-columns: 1fr;
  }

  .section-heading--split,
  .final-cta__inner {
    align-items: stretch;
    flex-direction: column;
  }

  .trust-strip span {
    min-height: 58px;
    border-right: 1px solid rgb(31 36 33 / 0.1);
  }

  .spotlight-image img {
    min-height: 340px;
  }
}
</style>
