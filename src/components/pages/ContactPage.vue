<script setup lang="ts">
defineProps<{
  company: {
    phone: string;
    phoneHref?: string;
    email: string;
  };
}>();
</script>

<template>
  <section class="contact-page">
    <div class="container contact-grid">
      <div class="contact-copy">
        <p class="eyebrow">Request an estimate</p>
        <h1>Ready to start your estimate?</h1>
        <p>
          Tell us about your roofing, siding, gutter, or bathroom project and we’ll follow up with a practical next
          step. Share what you know now, we can help sort out the details during the estimate process.
        </p>
        <div class="contact-methods">
          <a :href="`tel:${company.phoneHref || company.phone.replace(/[^0-9]/g, '')}`">{{ company.phone }}</a>
          <a :href="`mailto:${company.email}`">{{ company.email }}</a>
        </div>
      </div>

      <form class="estimate-form" name="estimate" method="POST" action="/thank-you/" data-netlify="true">
        <input type="hidden" name="form-name" value="estimate" />

        <label>
          Name
          <input name="name" autocomplete="name" required />
        </label>

        <label>
          Email
          <input name="email" type="email" autocomplete="email" required />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" autocomplete="tel" />
        </label>

        <label>
          Project type
          <select name="project_type" required>
            <option value="">Select a project</option>
            <option>Roofing</option>
            <option>Siding</option>
            <option>Gutters</option>
            <option>Bathroom Remodel</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          City
          <input name="location" autocomplete="address-level2" />
        </label>

        <label class="full">
          What are you planning?
          <textarea name="message" rows="5" required />
        </label>

        <button class="btn btn-primary" type="submit">
          Send Request
          <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.contact-copy {
  position: sticky;
  top: calc(var(--header-height) + var(--size-8));
}

.contact-copy h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4.2vw, 4.6rem);
  font-weight: var(--font-display-weight);
  line-height: 0.98;
}

.contact-copy p:not(.eyebrow) {
  margin: var(--size-5) 0 var(--size-8);
  color: rgb(31 36 33 / 0.72);
  font-size: 1.12rem;
}

.contact-methods {
  display: grid;
  gap: var(--size-3);
}

.contact-methods a {
  color: var(--color-forest);
  font-family: var(--font-heading);
  font-weight: 850;
}

.estimate-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--size-4);
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: var(--radius-md);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
  padding: clamp(1.25rem, 3vw, 2.5rem);
}

label {
  display: grid;
  gap: var(--size-2);
  color: var(--color-graphite);
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 850;
}

.full,
button {
  grid-column: 1 / -1;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgb(31 36 33 / 0.18);
  border-radius: var(--radius-sm);
  background: var(--color-warm-white);
  color: var(--color-iron);
  padding: 0.9rem 0.95rem;
}

textarea {
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--color-copper);
  outline: 3px solid rgb(184 106 61 / 0.16);
}

button {
  width: fit-content;
  margin-top: var(--size-2);
}

@media (max-width: 860px) {
  .contact-grid,
  .estimate-form {
    grid-template-columns: 1fr;
  }

  .contact-copy {
    position: static;
  }

  button {
    width: 100%;
  }
}
</style>
