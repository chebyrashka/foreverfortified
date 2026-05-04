<script setup lang="ts">
import CtaBandBlock from "@/components/blocks/CtaBandBlock.vue";
import TestimonialGridBlock from "@/components/blocks/TestimonialGridBlock.vue";

type Testimonial = {
  quote: string;
  fullQuote?: string;
  name: string;
  featured?: boolean;
  location?: string;
  service?: string;
  source?: string;
};

const props = defineProps<{
  company: {
    name: string;
    intro: string;
    estimateUrl: string;
    heroImage: string;
  };
  testimonials: Testimonial[];
}>();

const featuredTestimonials = props.testimonials.filter((testimonial) => testimonial.featured).slice(0, 3);

function testimonialMeta(testimonial: Testimonial) {
  return [testimonial.service, testimonial.location].filter(Boolean).join(" · ");
}

const testimonialItems = featuredTestimonials.map((testimonial) => ({
  quote: testimonial.quote,
  name: testimonial.name,
  meta: testimonialMeta(testimonial)
}));
</script>

<template>
  <article class="about-page">
    <section class="about-hero">
      <div class="about-hero__image">
        <img src="/images/service-photos/about-hero-exterior.jpg" alt="A finished Minnesota home exterior with gutters" />
      </div>
      <div class="about-hero__copy">
        <p class="eyebrow">About {{ company.name }}</p>
        <h1>Veteran-owned home improvement built for Minnesota homes.</h1>
        <p>
          Forever Fortified brings more than 20 years of experience to roofing, siding, gutters, windows, doors,
          painting, bathroom remodels, and other exterior and interior improvements across Minnesota.
        </p>
        <a class="btn btn-primary" :href="company.estimateUrl">Request a Free Estimate</a>
      </div>
    </section>

    <section class="section values">
      <div class="container">
        <p class="eyebrow">Company story</p>
        <h2 class="section-title">Hands-on project management, premium materials, and work built to last.</h2>
        <p class="section-copy">
          As a veteran-owned contractor, Forever Fortified focuses on upscale home improvements with transparent
          pricing, professional oversight, and high-quality American-made materials. The team specializes in durable
          roofing systems, including Brava Roof Tiles and other premium solutions, and backs its work with a 15-year
          workmanship warranty.
        </p>
        <div class="value-grid">
          <article>
            <h3>Transparent pricing</h3>
            <p>Homeowners should understand the scope, the options, and what is included before work begins.</p>
          </article>
          <article>
            <h3>Premium materials</h3>
            <p>Material recommendations are shaped around long-term performance, curb appeal, and Minnesota weather.</p>
          </article>
          <article>
            <h3>Hands-on oversight</h3>
            <p>Projects are managed with steady communication, careful workmanship, and attention through the finish.</p>
          </article>
        </div>
      </div>
    </section>

    <TestimonialGridBlock :items="testimonialItems" />

    <CtaBandBlock
      eyebrow="Ready to get started?"
      title="Ready to fortify your home?"
      text="Tell us what you're planning. We'll get back to you within 24 hours with a clear next step — no pressure, no nonsense."
      cta-label="Request a Free Estimate"
      :cta-href="company.estimateUrl"
    />
  </article>
</template>

<style scoped>
.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  min-height: calc(88svh - var(--header-height));
  background: var(--color-warm-white);
}

.about-hero__image {
  overflow: hidden;
}

.about-hero__image img {
  width: 100%;
  height: 100%;
  min-height: 560px;
  object-fit: cover;
  object-position: 50% 50%;
}

.about-hero__copy {
  display: grid;
  align-content: center;
  padding: clamp(2rem, 7vw, 6rem);
}

.about-hero h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.45rem, 4.8vw, 5.4rem);
  font-weight: var(--font-display-weight);
  line-height: 0.96;
}

.about-hero__copy > p:not(.eyebrow) {
  max-width: 58ch;
  margin: var(--size-5) 0 var(--size-8);
  color: rgb(31 36 33 / 0.74);
  font-size: 1.12rem;
}

.values {
  background: var(--color-stone-light);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
  margin-top: var(--size-10);
}

.values .section-copy {
  max-width: 78ch;
}

.value-grid article {
  min-height: 260px;
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-6);
}

.value-grid h3 {
  margin: 0;
  font-family: var(--font-heading);
}

.value-grid p {
  margin: var(--size-4) 0 0;
  color: rgb(31 36 33 / 0.7);
}

@media (max-width: 860px) {
  .about-hero,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .about-hero {
    min-height: auto;
  }

  .about-hero__image img {
    height: auto;
    min-height: 0;
  }

  .about-hero__copy {
    padding-inline: var(--gutter);
  }
}
</style>
