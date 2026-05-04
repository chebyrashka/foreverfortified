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
  estimateUrl: string;
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
  <section class="project-index">
    <div class="container project-index__hero">
      <p class="eyebrow">Past projects</p>
      <h1>See how Forever Fortified homes come together.</h1>
      <p>
        Browse real project examples, finishes, and homeowner feedback before you start planning your own roof,
        siding, gutter, or remodeling project.
      </p>
    </div>

    <div class="container trust-embed">
      <div class="trust-embed__frame">
        <iframe
          src="https://trusty.app/companies/forever-fortified"
          title="Forever Fortified Trusty company profile"
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <TestimonialGridBlock :items="testimonialItems" />

    <CtaBandBlock
      eyebrow="Ready to get started?"
      title="Ready to fortify your home?"
      text="Tell us what you're planning. We'll get back to you within 24 hours with a clear next step — no pressure, no nonsense."
      cta-label="Request a Free Estimate"
      :cta-href="estimateUrl"
    />
  </section>
</template>

<style scoped>
.project-index {
  padding-top: clamp(4rem, 8vw, 7rem);
}

.project-index__hero {
  margin-bottom: var(--size-12);
}

.project-index h1 {
  max-width: 980px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.8vw, 6.4rem);
  font-weight: var(--font-display-weight);
  line-height: 0.94;
}

.project-index__hero p:not(.eyebrow) {
  max-width: 62ch;
  color: rgb(31 36 33 / 0.72);
  font-size: 1.14rem;
}

.trust-embed {
  margin-bottom: clamp(3rem, 7vw, 6rem);
}

.trust-embed__frame {
  overflow: hidden;
  border: 1px solid rgb(31 36 33 / 0.12);
  border-radius: var(--radius-md);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
}

.trust-embed iframe {
  display: block;
  width: 100%;
  min-height: min(960px, 82vh);
  border: 0;
}

@media (max-width: 860px) {
  .trust-embed iframe {
    min-height: 760px;
  }
}
</style>
