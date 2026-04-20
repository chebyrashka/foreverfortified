<script setup lang="ts">
defineProps<{
  company: {
    name: string;
    intro: string;
    estimateUrl: string;
    heroImage: string;
  };
}>();
</script>

<template>
  <article class="about-page">
    <section class="about-hero">
      <div class="container about-hero__grid">
        <div>
          <p class="eyebrow">About {{ company.name }}</p>
          <h1>Practical home improvement work with a stronger point of view.</h1>
          <p>{{ company.intro }}</p>
          <a class="btn btn-primary" :href="company.estimateUrl">Request a Free Estimate</a>
        </div>
        <img :src="company.heroImage" alt="A durable residential exterior detail" />
      </div>
    </section>

    <section class="section values">
      <div class="container">
        <p class="eyebrow">Company story</p>
        <h2 class="section-title">A brand built around showing up clearly and finishing carefully.</h2>
        <div class="value-grid">
          <article>
            <h3>Clear recommendations</h3>
            <p>Homeowners should understand the project, the options, and why one path makes more sense than another.</p>
          </article>
          <article>
            <h3>Durable materials</h3>
            <p>The work should hold up visually and practically, especially in a climate that asks a lot from a home.</p>
          </article>
          <article>
            <h3>Respect for the home</h3>
            <p>The job site, communication, and final walkthrough should all reinforce that the home is being cared for.</p>
          </article>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.about-hero {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.about-hero__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.about-hero h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 5.4vw, 6.3rem);
  line-height: 0.94;
}

.about-hero p:not(.eyebrow) {
  margin: var(--size-5) 0 var(--size-8);
  color: rgb(31 36 33 / 0.74);
  font-size: 1.14rem;
}

.about-hero img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
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
  .about-hero__grid,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .about-hero img {
    aspect-ratio: 16 / 10;
  }
}
</style>
