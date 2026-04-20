<script setup lang="ts">
defineProps<{
  company: {
    name: string;
    tagline?: string;
    logoUrl?: string;
    phone: string;
    phoneHref?: string;
    email: string;
    location: string;
    estimateUrl: string;
  };
  navItems: Array<{ label: string; href: string }>;
  services: Array<{ title: string; href: string }>;
}>();
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="footer-brand">
        <a class="brand" href="/">
          <img v-if="company.logoUrl" class="brand__logo" :src="company.logoUrl" :alt="company.name" />
          <span v-else class="brand__mark" aria-hidden="true">FF</span>
          <span v-if="!company.logoUrl">
            <strong>{{ company.name }}</strong>
            <small>Roofing, siding, and bathroom remodels in {{ company.location }}.</small>
          </span>
        </a>
        <p>
          Practical recommendations, durable materials, and clean work for homeowners who want the job done with care.
        </p>
      </div>

      <nav aria-label="Footer services">
        <p>Services</p>
        <a v-for="service in services" :key="service.href" :href="service.href">{{ service.title }}</a>
      </nav>

      <nav aria-label="Footer company links">
        <p>Company</p>
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="footer-contact">
        <p>Start a project</p>
        <a :href="`tel:${company.phoneHref || company.phone.replace(/[^0-9]/g, '')}`">{{ company.phone }}</a>
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>
        <a class="btn btn-light" :href="company.estimateUrl">
          Request Estimate
          <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Copyright {{ new Date().getFullYear() }} {{ company.name }}.</span>
      <span>Built for clarity, trust, and long-term growth.</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-iron);
  color: var(--color-warm-white);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1.6fr 0.8fr 0.8fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  width: min(100% - (var(--gutter) * 2), var(--container-wide));
  margin-inline: auto;
  padding-block: clamp(3rem, 6vw, 5.5rem);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--size-3);
}

.brand__logo {
  width: min(240px, 100%);
  height: auto;
  max-height: 112px;
  object-fit: contain;
  object-position: left center;
  filter: invert(1);
}

.brand__mark {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 0.18);
  border-radius: var(--radius-sm);
  color: var(--color-warm-white);
  font-family: var(--font-label);
  font-size: 0.84rem;
  font-weight: 900;
}

.brand strong,
nav p,
.footer-contact p {
  display: block;
  margin: 0 0 var(--size-3);
  font-family: var(--font-label);
  font-weight: 850;
}

.brand small,
.footer-brand p,
nav a,
.footer-contact a:not(.btn),
.footer-bottom {
  color: rgb(247 243 236 / 0.72);
}

.footer-brand p {
  max-width: 38ch;
  margin: var(--size-5) 0 0;
}

nav,
.footer-contact {
  display: grid;
  align-content: start;
  gap: var(--size-3);
}

nav a,
.footer-contact a:not(.btn) {
  width: fit-content;
}

nav a:hover,
.footer-contact a:not(.btn):hover {
  color: var(--color-white);
}

.footer-contact .btn {
  width: fit-content;
  margin-top: var(--size-2);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: var(--size-4);
  width: min(100% - (var(--gutter) * 2), var(--container-wide));
  margin-inline: auto;
  border-top: 1px solid rgb(255 255 255 / 0.12);
  padding-block: var(--size-5);
  font-size: 0.9rem;
}

@media (max-width: 920px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .site-footer__inner,
  .footer-bottom {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    display: grid;
  }
}
</style>
