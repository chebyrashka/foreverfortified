<script setup lang="ts">
import BrandIcon from "@/components/site/BrandIcon.vue";

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
  fullQuote?: string;
  name: string;
  featured?: boolean;
  location?: string;
  service?: string;
  source?: string;
};

type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
};

const whyItems = [
  { icon: "shield", label: "Weather-ready thinking" },
  { icon: "communication", label: "Clear project communication" },
  { icon: "materials", label: "Materials matched to long-term value" },
  { icon: "home-care", label: "Respect for the finished home" }
];

const showProcessSection = false;
const showArticlesSection = false;

const props = defineProps<{
  company: {
    name: string;
    intro: string;
    heroImage: string;
    heroCopy: {
      eyebrow: string;
      headline: string;
      intro: string;
    };
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

const featuredTestimonials = props.testimonials.filter((testimonial) => testimonial.featured).slice(0, 3);

function testimonialMeta(testimonial: Testimonial) {
  return [testimonial.service, testimonial.location].filter(Boolean).join(" · ");
}
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <img class="hero__media" :src="company.heroImage" alt="A finished home exterior with a strong roofline" />
      <div class="hero__shade" aria-hidden="true" />
      <div class="hero__content container-wide">
        <div class="hero__copy">
          <p class="hero__eyebrow">{{ company.heroCopy.eyebrow }}</p>
          <h1>{{ company.heroCopy.headline }}</h1>
          <p>{{ company.heroCopy.intro }}</p>
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
            <strong>4</strong>
            <span>Core specialties</span>
            <small>Roofing, siding, gutters, and bathrooms.</small>
          </div>
          <div>
            <strong>24h</strong>
            <span>Quote follow-up</span>
            <small>We will get back to you within one day.</small>
          </div>
          <div>
            <strong>1st</strong>
            <span>Done-right mindset</span>
            <small>Careful prep, clean work, and a final walkthrough.</small>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip" aria-label="Trust signals">
      <div class="trust-strip__inner container-wide">
        <div class="trust-strip__item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.8L12 3Z" />
          </svg>
          <span>Detail-driven work</span>
        </div>
        <div class="trust-strip__item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4.2 4.2L19 6.8" />
          </svg>
          <span>Free estimates</span>
        </div>
        <div class="trust-strip__item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s6-5.7 6-11a6 6 0 0 0-12 0c0 5.3 6 11 6 11Z" />
            <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          </svg>
          <span>Minnesota local</span>
        </div>
        <div class="trust-strip__item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 7h14M5 12h14M5 17h10" />
          </svg>
          <span>Clear guidance</span>
        </div>
        <div class="trust-strip__item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            <path d="m8.5 12.3 2.2 2.2 4.8-5" />
          </svg>
          <span>Hands-on oversight</span>
        </div>
      </div>
    </section>

    <section id="services" class="section services">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Core specialties</p>
          <h2 class="section-title">Get the work done right, at a fair price.</h2>
          <p class="section-copy">
            Forever Fortified brings honest recommendations, quality materials, and clean craftsmanship to the projects
            your home needs most, from roofing and siding to gutters and bathroom remodels.
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
            The best home upgrades feel steady from start to finish. With Forever Fortified, you get honest guidance,
            clean communication, and craftsmanship that treats your home with care at every step.
          </p>
          <ul class="why-list">
            <li v-for="item in whyItems" :key="item.label">
              <BrandIcon class="why-list__icon" :name="item.icon" :size="32" />
              <span>{{ item.label }}</span>
            </li>
          </ul>
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
          <h2 class="section-title">The kind of work people are happy to recommend.</h2>
        </div>
        <div class="testimonial-grid">
          <figure v-for="testimonial in featuredTestimonials" :key="testimonial.quote">
            <blockquote>{{ testimonial.quote }}</blockquote>
            <figcaption>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonialMeta(testimonial) }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section v-if="showProcessSection" class="section process">
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

    <section v-if="showArticlesSection" class="section articles-preview">
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
          <p class="eyebrow">Ready to get started?</p>
          <h2>Ready to fortify your home?</h2>
          <p>Tell us what you're planning. We'll get back to you within 24 hours with a clear next step — no pressure, no nonsense.</p>
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
  max-width: 1000px;
}

.hero__eyebrow {
  margin: 0 0 var(--size-4);
  color: var(--color-stone);
  font-family: var(--font-label);
  font-size: 0.9rem;
  font-weight: 850;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.75rem, 7.3vw, 6.5rem);
  font-weight: var(--font-display-weight);
  line-height: 0.94;
}

.hero__copy > p:not(.hero__eyebrow) {
  max-width: 650px;
  margin: var(--size-8) 0 var(--size-10);
  color: rgb(255 255 255 / 0.82);
  font-size: clamp(1.08rem, 1.7vw, 1.3rem);
}

.hero__proof {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: rgb(247 250 245 / 0.96);
  box-shadow: var(--shadow-strong);
  color: var(--color-iron);
}

.hero__proof div {
  min-height: 142px;
  padding: clamp(1.2rem, 2.4vw, 2rem);
  background: var(--color-warm-white);
}

.hero__proof strong {
  display: block;
  color: var(--color-copper);
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.5vw, 4.75rem);
  font-weight: var(--font-display-weight);
  line-height: 0.88;
}

.hero__proof span {
  display: block;
  max-width: 24ch;
  margin-top: var(--size-3);
  color: var(--color-iron);
  font-family: var(--font-label);
  font-size: 0.92rem;
  font-weight: 850;
  text-transform: uppercase;
}

.hero__proof small {
  display: block;
  max-width: 28ch;
  margin-top: var(--size-2);
  color: rgb(31 36 33 / 0.68);
  font-size: 0.88rem;
  line-height: 1.45;
}

.hero .btn-light {
  border-color: rgb(255 255 255 / 0.24);
  background: rgb(255 255 255 / 0.055);
}

.hero .btn-light:hover {
  border-color: rgb(255 255 255 / 0.72);
  background: rgb(255 255 255 / 0.12);
}

.trust-strip {
  border-bottom: 1px solid rgb(31 36 33 / 0.1);
  background: var(--color-warm-white);
}

.trust-strip__inner {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.trust-strip__item {
  display: flex;
  min-height: 78px;
  align-items: center;
  justify-content: center;
  gap: var(--size-3);
  border-left: 1px solid rgb(31 36 33 / 0.1);
  color: var(--color-graphite);
  font-family: var(--font-label);
  font-size: 0.88rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
}

.trust-strip__item svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  color: var(--color-copper);
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.9;
}

.trust-strip__item:first-child svg {
  fill: currentColor;
  stroke: none;
}

.trust-strip__item:last-child {
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--size-5);
}

.service-card {
  display: grid;
  grid-template-rows: auto 1fr;
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
  display: flex;
  min-height: 100%;
  flex-direction: column;
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
  margin: var(--size-4) 0 var(--size-5);
  padding: 0;
  list-style: none;
}

.service-card li {
  display: flex;
  gap: var(--size-2);
  color: var(--color-graphite);
  font-weight: 400;
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
  width: 100%;
  min-height: 58px;
  align-items: center;
  gap: var(--size-2);
  margin-top: auto;
  border-top: 1px solid rgb(31 36 33 / 0.12);
  color: var(--color-copper);
  padding-top: var(--size-5);
  font-family: var(--font-label);
  font-size: 0.95rem;
  font-weight: 850;
  transition:
    color var(--transition),
    padding-left var(--transition);
}

.service-card a:hover {
  color: var(--color-copper-dark);
  padding-left: var(--size-2);
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
  padding: 0;
  list-style: none;
}

.why-list li {
  display: grid;
  gap: var(--size-3);
  align-content: start;
  border-left: 3px solid var(--color-copper);
  background: rgb(255 255 255 / 0.6);
  padding: var(--size-4);
}

.why-list__icon {
  color: var(--color-copper);
}

.why-list span {
  font-family: var(--font-label);
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
  border-radius: var(--radius-md);
  object-fit: cover;
}

.spotlight-copy {
  display: grid;
  align-content: center;
  border-radius: var(--radius-md);
  background: var(--color-forest);
  color: var(--color-white);
  padding: clamp(1.75rem, 3.5vw, 3rem);
}

.spotlight-copy h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 4.2rem);
  font-weight: var(--font-heading-weight);
  line-height: 0.98;
}

.spotlight-copy p:not(.eyebrow) {
  margin: var(--size-5) 0 var(--size-6);
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
  width: 100%;
  min-height: 58px;
  justify-content: flex-start;
  border: 0;
  border-top: 1px solid rgb(247 243 236 / 0.2);
  border-radius: 0;
  background: transparent;
  color: var(--color-white);
  padding: var(--size-5) 0 0;
  transition:
    color var(--transition),
    padding-left var(--transition);
}

.spotlight-copy .btn:hover {
  transform: none;
  color: var(--color-stone);
  padding-left: var(--size-2);
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
  font-family: var(--font-label);
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
  font-family: var(--font-label);
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
  background:
    linear-gradient(135deg, rgb(47 94 64 / 0.98), rgb(31 68 46 / 0.98)),
    var(--color-copper);
  color: var(--color-white);
  padding-block: clamp(3rem, 6vw, 5rem);
}

.final-cta__inner {
  display: grid;
  gap: var(--size-8);
  justify-items: start;
}

.final-cta h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4vw, 4.4rem);
  font-weight: var(--font-heading-weight);
  line-height: 0.98;
}

.final-cta .eyebrow {
  color: var(--color-white);
}

.final-cta p:not(.eyebrow) {
  max-width: 56ch;
  margin: var(--size-4) 0 0;
  color: rgb(247 243 236 / 0.74);
}

.final-cta .btn-primary {
  width: min(100%, 560px);
  min-height: 58px;
  justify-content: flex-start;
  border: 0;
  border-top: 1px solid rgb(247 243 236 / 0.32);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--color-white);
  padding: var(--size-5) 0 0;
  transition:
    color var(--transition),
    padding-left var(--transition);
}

.final-cta .btn-primary:hover {
  transform: none;
  background: transparent;
  color: var(--color-stone);
  padding-left: var(--size-2);
}

@media (max-width: 1180px) {
  .service-grid,
  .testimonial-grid,
  .article-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 980px) {
  .why-grid,
  .spotlight-grid {
    grid-template-columns: 1fr;
  }

  .process-list {
    grid-template-columns: 1fr 1fr;
  }

  .trust-strip__inner {
    grid-template-columns: repeat(2, 1fr);
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

  .trust-strip__item {
    min-height: 58px;
    border-right: 1px solid rgb(31 36 33 / 0.1);
  }

  .spotlight-image img {
    min-height: 340px;
  }
}
</style>
