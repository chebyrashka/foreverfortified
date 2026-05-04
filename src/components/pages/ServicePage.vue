<script setup lang="ts">
import ServiceRequestForm from "@/components/site/ServiceRequestForm.vue";

type GalleryItem = {
  title: string;
  text: string;
  image: string;
};

type SubService = {
  slug: string;
  title: string;
  summary: string;
};

type BrandPage = {
  title: string;
  summary: string;
  href: string;
  logo?: string;
};

type Service = {
  slug: string;
  title: string;
  href: string;
  eyebrow: string;
  headline: string;
  summary: string;
  image: string;
  highlights: string[];
  overview?: {
    title: string;
    body: string;
    points: string[];
  };
  brands?: string[];
  showBrands?: boolean;
  gallery?: GalleryItem[];
  showGallery?: boolean;
  subServicesTitle?: string;
  showSubServiceLinks?: boolean;
  subServices?: SubService[];
  brandPages?: BrandPage[];
  problems: string[];
  benefits: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

type Testimonial = {
  quote: string;
  fullQuote?: string;
  name: string;
  location?: string;
  service?: string;
  source?: string;
};

const props = defineProps<{
  service: Service;
  testimonials: Testimonial[];
  estimateUrl: string;
}>();

const testimonialServiceGroups: Record<string, string[]> = {
  roofing: ["Roofing"],
  siding: ["Siding", "Remodeling"],
  gutters: ["Gutters"],
  "bathroom-remodel": ["Bathroom", "Remodeling", "Home improvement"]
};

const preferredServices = testimonialServiceGroups[props.service.slug] || [props.service.title];
const matchingTestimonials = props.testimonials.filter((testimonial) =>
  preferredServices.includes(testimonial.service || "")
);
const serviceTestimonials = [
  ...matchingTestimonials,
  ...props.testimonials.filter((testimonial) => !matchingTestimonials.includes(testimonial))
].slice(0, 3);

function testimonialMeta(testimonial: Testimonial) {
  return [testimonial.service, testimonial.location].filter(Boolean).join(" · ");
}
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
          <a class="btn btn-primary" href="#request-service">
            Request an Estimate
            <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </a>
          <a class="btn btn-secondary" href="#overview">View Overview</a>
        </div>
      </div>
    </section>

    <section id="overview" class="section service-intro">
      <div class="container">
        <div class="intro-grid">
          <div>
            <p class="eyebrow">{{ service.title }} overview</p>
            <h2 class="section-title">{{ service.overview?.title || "A clearer way to plan the work." }}</h2>
            <p class="section-copy">{{ service.overview?.body || service.summary }}</p>
          </div>
          <div class="overview-list">
            <div v-for="benefit in service.benefits" :key="benefit.title">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.subServices?.length" class="section sub-services">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">{{ service.title }} services</p>
          <h2 class="section-title">{{ service.subServicesTitle || "Focused pages for the most common project needs." }}</h2>
        </div>
        <div class="sub-service-grid">
          <article
            v-for="item in service.subServices"
            :key="item.slug"
            :class="{ 'sub-service-card--static': service.showSubServiceLinks === false }"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
            <a v-if="service.showSubServiceLinks !== false" :href="`${service.href}${item.slug}/`">
              Learn More
              <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <section v-if="service.brandPages?.length" class="section material-pages">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Featured roofing materials</p>
          <h2 class="section-title">Explore premium roof options in more detail.</h2>
        </div>
        <div class="material-grid">
          <article v-for="brand in service.brandPages" :key="brand.href">
            <img v-if="brand.logo" :src="brand.logo" :alt="brand.title" />
            <div>
              <h3>{{ brand.title }}</h3>
              <p>{{ brand.summary }}</p>
              <a :href="brand.href">
                Learn more about Brava roofing options
                <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-if="service.showBrands !== false && service.brands?.length" class="section brand-section">
      <div class="container brand-grid">
        <div>
          <p class="eyebrow">Brands and materials</p>
          <h2 class="section-title">Product options we can plan around.</h2>
          <p class="section-copy">
            We help compare trusted manufacturers and product lines around durability, appearance, warranty
            expectations, maintenance, and budget.
          </p>
        </div>
        <ul class="brand-list">
          <li v-for="brand in service.brands" :key="brand">{{ brand }}</li>
        </ul>
      </div>
    </section>

    <section v-if="service.showGallery !== false && service.gallery?.length" class="section project-gallery">
      <div class="container-wide">
        <div class="section-heading">
          <p class="eyebrow">Project gallery</p>
          <h2 class="section-title">{{ service.title }} work in context.</h2>
        </div>
        <div class="gallery-grid">
          <article v-for="item in service.gallery" :key="item.title">
            <img :src="item.image" :alt="item.title" />
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section service-testimonials">
      <div class="container">
        <div class="section-heading section-heading--center">
          <p class="eyebrow">Homeowner proof</p>
          <h2 class="section-title">The kind of work people are happy to recommend.</h2>
        </div>
        <div class="testimonial-grid">
          <figure v-for="testimonial in serviceTestimonials" :key="testimonial.quote">
            <blockquote>{{ testimonial.quote }}</blockquote>
            <figcaption>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonialMeta(testimonial) }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="faq" class="section faq">
      <div class="container faq-grid">
        <div>
          <p class="eyebrow">Questions</p>
          <h2 class="section-title">Common questions homeowners ask before starting.</h2>
        </div>
        <div class="faq-list">
          <details v-for="item in service.faqs" :key="item.question" open>
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section id="request-service" class="section request-service">
      <div class="container request-grid">
        <div>
          <p class="eyebrow">Request service</p>
          <h2 class="section-title">Let us help you with your project.</h2>
          <p class="section-copy">
            Share a few details and we'll follow up with a clear next step, whether you need a quick repair, a full
            replacement, or help comparing options.
          </p>
        </div>
        <ServiceRequestForm :service-title="service.title" :service-slug="service.slug" />
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
  font-weight: var(--font-display-weight);
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
  align-items: start;
}

.overview-list {
  display: grid;
}

.overview-list div {
  display: grid;
  gap: 0.35rem;
  border-bottom: 1px solid rgb(31 36 33 / 0.12);
  padding-block: var(--size-5);
}

.overview-list h3 {
  margin: 0;
  color: var(--color-graphite);
  font-family: var(--font-quote);
  font-size: clamp(1.35rem, 2vw, 1.85rem);
  font-weight: 600;
}

.overview-list p {
  max-width: 48ch;
  margin: 0;
  color: rgb(31 36 33 / 0.68);
  font-size: 1rem;
  line-height: 1.55;
}

.sub-services,
.material-pages,
.service-testimonials,
.request-service {
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

.sub-service-grid,
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
}

.sub-service-grid article {
  display: grid;
  min-height: 260px;
  align-content: space-between;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

.sub-service-grid .sub-service-card--static {
  min-height: auto;
  align-content: start;
  gap: var(--size-4);
}

.sub-service-grid h3,
.gallery-grid h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
}

.sub-service-grid p,
.gallery-grid p {
  color: rgb(31 36 33 / 0.68);
}

.sub-service-grid a {
  display: inline-flex;
  width: 100%;
  min-height: 58px;
  align-items: center;
  gap: var(--size-2);
  border-top: 1px solid rgb(31 36 33 / 0.12);
  color: var(--color-copper);
  padding-top: var(--size-5);
  font-family: var(--font-label);
  font-weight: 850;
  transition:
    color var(--transition),
    padding-left var(--transition);
}

.sub-service-grid a:hover {
  color: var(--color-copper-dark);
  padding-left: var(--size-2);
}

.brand-grid,
.request-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.brand-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--size-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.brand-list li {
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-4);
  font-family: var(--font-label);
  font-weight: 850;
}

.material-grid {
  display: grid;
  gap: var(--size-5);
}

.material-grid article {
  display: grid;
  grid-template-columns: minmax(180px, 0.35fr) minmax(0, 1fr);
  gap: var(--size-6);
  align-items: center;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

.material-grid img {
  width: 100%;
  max-width: 260px;
  border-radius: var(--radius-sm);
  background: var(--color-white);
}

.material-grid h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.35rem);
  line-height: 1;
}

.material-grid p {
  max-width: 68ch;
  color: rgb(31 36 33 / 0.68);
}

.material-grid a {
  display: inline-flex;
  align-items: center;
  gap: var(--size-2);
  color: var(--color-copper);
  font-family: var(--font-label);
  font-weight: 850;
}

.project-gallery {
  background: var(--color-warm-white);
}

.gallery-grid article {
  overflow: hidden;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.gallery-grid div {
  padding: var(--size-5);
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
  font-weight: var(--font-heading-weight);
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
  grid-template-columns: repeat(3, 1fr);
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

@media (max-width: 920px) {
  .service-hero,
  .intro-grid,
  .faq-grid,
  .image-band__grid,
  .sub-service-grid,
  .brand-grid,
  .material-grid article,
  .gallery-grid,
  .testimonial-grid,
  .request-grid {
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
  .brand-list {
    grid-template-columns: 1fr;
  }
}
</style>
