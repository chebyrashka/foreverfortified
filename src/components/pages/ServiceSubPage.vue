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

type Service = {
  slug: string;
  title: string;
  href: string;
  image: string;
  brands?: string[];
  gallery?: GalleryItem[];
};

defineProps<{
  service: Service;
  subService: SubService;
}>();
</script>

<template>
  <article class="sub-service-page">
    <section class="sub-service-hero">
      <div class="container sub-service-hero__grid">
        <div>
          <p class="eyebrow">{{ service.title }}</p>
          <h1>{{ subService.title }}</h1>
          <p>{{ subService.summary }}</p>
          <div class="button-row">
            <a class="btn btn-primary" href="#request-service">Request Service</a>
            <a class="btn btn-secondary" :href="service.href">Back to {{ service.title }}</a>
          </div>
        </div>
        <img :src="service.image" :alt="subService.title" />
      </div>
    </section>

    <section class="section sub-service-overview">
      <div class="container overview-grid">
        <div>
          <p class="eyebrow">Overview</p>
          <h2 class="section-title">A focused page for {{ subService.title.toLowerCase() }} content.</h2>
        </div>
        <div class="overview-copy">
          <p>
            This stub gives {{ subService.title.toLowerCase() }} its own place for process notes, product details,
            before-and-after photos, FAQs, and proof once the client has final content.
          </p>
          <p>
            For now, it inherits the main {{ service.title.toLowerCase() }} brand list and gallery so the page has a
            complete shape while the real service copy is developed.
          </p>
        </div>
      </div>
    </section>

    <section class="section brand-section">
      <div class="container brand-grid">
        <div>
          <p class="eyebrow">Brands and materials</p>
          <h2 class="section-title">Product options to confirm before launch.</h2>
        </div>
        <ul class="brand-list">
          <li v-for="brand in service.brands" :key="brand">{{ brand }}</li>
        </ul>
      </div>
    </section>

    <section class="section project-gallery">
      <div class="container-wide">
        <div class="section-heading">
          <p class="eyebrow">Project gallery</p>
          <h2 class="section-title">A starting point for related project proof.</h2>
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
        <ServiceRequestForm :service-title="subService.title" :service-slug="`${service.slug}-${subService.slug}`" />
      </div>
    </section>
  </article>
</template>

<style scoped>
.sub-service-hero {
  padding-block: clamp(4rem, 8vw, 7rem);
  background: var(--color-warm-white);
}

.sub-service-hero__grid,
.overview-grid,
.brand-grid,
.request-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.sub-service-hero h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.6vw, 6.2rem);
  font-weight: var(--font-display-weight);
  line-height: 0.94;
}

.sub-service-hero p:not(.eyebrow),
.overview-copy p {
  color: rgb(31 36 33 / 0.74);
  font-size: 1.12rem;
}

.sub-service-hero img {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-md);
  object-fit: cover;
}

.sub-service-overview,
.project-gallery {
  background: var(--color-white);
}

.brand-section,
.request-service {
  background: var(--color-stone-light);
}

.overview-copy {
  display: grid;
  gap: var(--size-4);
}

.overview-copy p {
  margin: 0;
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

.section-heading {
  max-width: 820px;
  margin-bottom: var(--size-10);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-5);
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

.gallery-grid h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
}

.gallery-grid p {
  color: rgb(31 36 33 / 0.68);
}

@media (max-width: 920px) {
  .sub-service-hero__grid,
  .overview-grid,
  .brand-grid,
  .request-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .sub-service-hero img {
    aspect-ratio: 16 / 10;
  }
}

@media (max-width: 680px) {
  .brand-list {
    grid-template-columns: 1fr;
  }
}
</style>
