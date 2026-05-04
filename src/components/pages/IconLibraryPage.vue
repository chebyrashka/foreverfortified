<script setup lang="ts">
import { computed } from "vue";
import BrandIcon from "@/components/site/BrandIcon.vue";
import { brandIcons } from "@/data/iconLibrary";

const groupedIcons = computed(() => {
  const groups = new Map<string, typeof brandIcons>();

  for (const icon of brandIcons) {
    groups.set(icon.group, [...(groups.get(icon.group) || []), icon]);
  }

  return Array.from(groups, ([label, icons]) => ({ label, icons }));
});
</script>

<template>
  <article class="icon-library">
    <section class="icon-library__hero">
      <div class="container">
        <p class="eyebrow">Icon system</p>
        <h1>Simple outline icons for the Forever Fortified site.</h1>
        <p>
          A shared family of rounded, stroke-based symbols for services, trust signals, calls to action, and supporting
          content.
        </p>
      </div>
    </section>

    <section v-for="group in groupedIcons" :key="group.label" class="section icon-group">
      <div class="container-wide">
        <div class="icon-group__heading">
          <p class="eyebrow">{{ group.label }}</p>
          <h2>{{ group.label }} icons</h2>
        </div>

        <div class="icon-grid">
          <article v-for="icon in group.icons" :key="icon.name" class="icon-card">
            <div class="icon-card__preview">
              <BrandIcon :name="icon.name" :title="icon.label" :size="42" />
            </div>
            <div>
              <h3>{{ icon.label }}</h3>
              <p>{{ icon.description }}</p>
              <code>{{ icon.name }}</code>
            </div>
          </article>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.icon-library {
  background: var(--color-warm-white);
}

.icon-library__hero {
  padding-block: clamp(4rem, 8vw, 7rem) var(--size-12);
}

.icon-library__hero h1 {
  max-width: 980px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 5.8vw, 6.25rem);
  font-weight: var(--font-display-weight);
  line-height: 0.94;
}

.icon-library__hero p:not(.eyebrow) {
  max-width: 64ch;
  margin: var(--size-6) 0 0;
  color: rgb(31 36 33 / 0.72);
  font-size: 1.12rem;
}

.icon-group {
  border-top: 1px solid rgb(31 36 33 / 0.1);
}

.icon-group__heading {
  margin-bottom: var(--size-8);
}

.icon-group__heading h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.6vw, 4rem);
  font-weight: var(--font-heading-weight);
  line-height: 1;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--size-4);
}

.icon-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--size-4);
  align-items: start;
  min-height: 180px;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--size-5);
}

.icon-card__preview {
  display: grid;
  width: 68px;
  height: 68px;
  place-items: center;
  border: 1px solid rgb(47 94 64 / 0.14);
  border-radius: var(--radius-md);
  background: var(--color-stone-light);
  color: var(--color-copper);
}

.icon-card h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.1rem;
}

.icon-card p {
  margin: var(--size-2) 0 var(--size-4);
  color: rgb(31 36 33 / 0.68);
}

.icon-card code {
  border-radius: 999px;
  background: rgb(47 94 64 / 0.08);
  color: var(--color-copper-dark);
  padding: 0.34rem 0.62rem;
  font-size: 0.82rem;
}

@media (max-width: 1100px) {
  .icon-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .icon-grid,
  .icon-card {
    grid-template-columns: 1fr;
  }

  .icon-card__preview {
    width: 64px;
    height: 64px;
  }
}
</style>
