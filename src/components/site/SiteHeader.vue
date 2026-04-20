<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from "vue";
import { ref } from "vue";

type NavItem = {
  label: string;
  href: string;
};

type Service = {
  title: string;
  href: string;
};

const props = defineProps<{
  company: {
    name: string;
    phone: string;
    estimateUrl: string;
  };
  navItems: NavItem[];
  services: Service[];
}>();

const isOpen = ref(false);

const serviceLinks = computed(() =>
  props.services.map((service) => ({
    label: service.title,
    href: service.href
  }))
);

watch(isOpen, (value) => {
  if (typeof document !== "undefined") {
    document.body.classList.toggle("menu-open", value);
  }
});

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.body.classList.remove("menu-open");
  }
});
</script>

<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="site-header__inner">
      <a class="brand" href="/" aria-label="Forever Fortified home">
        <span class="brand__mark" aria-hidden="true">FF</span>
        <span class="brand__text">
          <strong>{{ company.name }}</strong>
          <small>Built to hold up</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <div class="nav-group">
          <button class="nav-link nav-trigger" type="button">
            Services
            <svg class="nav-chevron" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </button>
          <div class="service-menu">
            <a v-for="service in serviceLinks" :key="service.href" :href="service.href">
              {{ service.label }}
            </a>
          </div>
        </div>
        <a
          v-for="item in navItems.filter((item) => !serviceLinks.some((service) => service.href === item.href))"
          :key="item.href"
          class="nav-link"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="header-actions">
        <a class="phone-link" :href="`tel:${company.phone.replace(/[^0-9]/g, '')}`">
          {{ company.phone }}
        </a>
        <a class="btn btn-primary header-cta" :href="company.estimateUrl">
          Request Estimate
          <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          @click="isOpen = !isOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="mobile-menu" :class="{ 'mobile-menu--open': isOpen }">
      <nav aria-label="Mobile navigation">
        <p>Services</p>
        <a v-for="service in serviceLinks" :key="service.href" :href="service.href" @click="isOpen = false">
          {{ service.label }}
        </a>
        <p>Company</p>
        <a
          v-for="item in navItems.filter((item) => !serviceLinks.some((service) => service.href === item.href))"
          :key="item.href"
          :href="item.href"
          @click="isOpen = false"
        >
          {{ item.label }}
        </a>
        <a class="btn btn-primary" :href="company.estimateUrl" @click="isOpen = false">
          Request a Free Estimate
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 20;
  top: 0;
  background: rgb(247 243 236 / 0.94);
  border-bottom: 1px solid rgb(31 36 33 / 0.1);
  backdrop-filter: blur(18px);
}

.skip-link {
  position: absolute;
  z-index: 30;
  top: var(--size-3);
  left: var(--size-3);
  transform: translateY(-150%);
  border-radius: var(--radius-sm);
  background: var(--color-iron);
  color: var(--color-white);
  padding: var(--size-2) var(--size-3);
  transition: transform var(--transition);
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header__inner {
  display: flex;
  min-height: var(--header-height);
  align-items: center;
  justify-content: space-between;
  gap: var(--size-5);
  width: min(100% - (var(--gutter) * 2), var(--container-wide));
  margin-inline: auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--size-3);
  min-width: max-content;
}

.brand__mark {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: var(--radius-sm);
  background: var(--color-iron);
  color: var(--color-warm-white);
  font-family: var(--font-heading);
  font-size: 0.84rem;
  font-weight: 900;
}

.brand__text {
  display: grid;
  gap: 0.08rem;
}

.brand__text strong {
  font-family: var(--font-heading);
  font-size: 1rem;
  line-height: 1;
}

.brand__text small {
  color: rgb(31 36 33 / 0.62);
  font-size: 0.78rem;
}

.desktop-nav,
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--size-2);
}

.desktop-nav {
  justify-content: center;
  flex: 1;
}

.nav-group {
  position: relative;
}

.nav-link,
.nav-trigger,
.phone-link {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  border-radius: var(--radius-sm);
  background: transparent;
  color: rgb(31 36 33 / 0.78);
  padding: 0.55rem 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 750;
}

.nav-link:hover,
.nav-trigger:hover,
.phone-link:hover {
  color: var(--color-iron);
  background: rgb(31 36 33 / 0.06);
}

.nav-chevron {
  width: 14px;
  height: 14px;
}

.service-menu {
  position: absolute;
  top: calc(100% + var(--size-2));
  left: 0;
  display: grid;
  min-width: 220px;
  padding: var(--size-2);
  transform: translateY(6px);
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity var(--transition),
    transform var(--transition);
}

.nav-group:hover .service-menu,
.nav-group:focus-within .service-menu {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.service-menu a {
  border-radius: var(--radius-sm);
  padding: var(--size-3);
  color: var(--color-iron);
  font-weight: 750;
}

.service-menu a:hover {
  background: var(--color-stone-light);
}

.header-actions {
  justify-content: flex-end;
}

.header-cta {
  min-height: 42px;
  padding-inline: var(--size-4);
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border: 1px solid rgb(31 36 33 / 0.18);
  border-radius: var(--radius-sm);
  background: transparent;
}

.menu-toggle span {
  width: 18px;
  height: 2px;
  background: var(--color-iron);
}

.mobile-menu {
  display: none;
}

@media (max-width: 1020px) {
  .desktop-nav,
  .phone-link {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .mobile-menu {
    position: fixed;
    z-index: 18;
    inset: var(--header-height) 0 auto;
    display: block;
    max-height: calc(100vh - var(--header-height));
    overflow: auto;
    transform: translateY(-8px);
    border-bottom: 1px solid rgb(31 36 33 / 0.12);
    background: var(--color-warm-white);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity var(--transition),
      transform var(--transition);
  }

  .mobile-menu--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-menu nav {
    display: grid;
    gap: var(--size-2);
    width: min(100% - (var(--gutter) * 2), var(--container-wide));
    margin-inline: auto;
    padding: var(--size-6) 0;
  }

  .mobile-menu p {
    margin: var(--size-4) 0 var(--size-1);
    color: var(--color-copper);
    font-family: var(--font-heading);
    font-size: 0.78rem;
    font-weight: 850;
    text-transform: uppercase;
  }

  .mobile-menu a:not(.btn) {
    border-bottom: 1px solid rgb(31 36 33 / 0.1);
    padding: var(--size-4) 0;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 800;
  }
}

@media (max-width: 620px) {
  .header-cta {
    display: none;
  }

  .brand__text small {
    display: none;
  }
}
</style>
