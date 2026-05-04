<script setup lang="ts">
const props = defineProps<{
  serviceTitle: string;
  serviceSlug: string;
}>();

const formName = `service-request-${props.serviceSlug}`;
</script>

<template>
  <form class="service-request-form" :name="formName" method="POST" action="/thank-you/" data-netlify="true">
    <input type="hidden" name="form-name" :value="formName" />
    <input type="hidden" name="service" :value="serviceTitle" />

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
      City
      <input name="location" autocomplete="address-level2" />
    </label>

    <label>
      Timing
      <select name="timing">
        <option>As soon as possible</option>
        <option>In the next few weeks</option>
        <option>Planning for later</option>
        <option>Not sure yet</option>
      </select>
    </label>

    <label class="full">
      Tell us about the project
      <textarea name="message" rows="5" required />
    </label>

    <button class="btn btn-primary" type="submit">
      Send Request
      <svg class="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" />
      </svg>
    </button>
  </form>
</template>

<style scoped>
.service-request-form {
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
  font-family: var(--font-label);
  font-size: 0.9rem;
  font-weight: 800;
}

.full {
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
  padding: 0.9rem 1rem;
  font: inherit;
  font-weight: 500;
}

textarea {
  resize: vertical;
}

button {
  width: fit-content;
}

@media (max-width: 700px) {
  .service-request-form {
    grid-template-columns: 1fr;
  }
}
</style>
