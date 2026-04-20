# Storyblok Content Model Draft

This draft matches the current Astro/Vue scaffold and keeps editing approachable for a small business team.

## Content Types

### Page

Fields:
- `title`
- `slug`
- `meta_description`
- `body`: blocks

Allowed blocks:
- `hero_section`
- `service_cards`
- `feature_section`
- `testimonial_grid`
- `cta_band`

### Service

Fields:
- `title`
- `slug`
- `eyebrow`
- `headline`
- `summary`
- `hero_image`
- `highlights`
- `problems`
- `benefits`
- `faqs`
- `related_testimonials`
- `cta_label`

Initial entries:
- Roofing
- Siding
- Bathroom Remodel

### Testimonial

Fields:
- `quote`
- `name`
- `location`
- `service`
- `featured`

### Article

Fields:
- `title`
- `slug`
- `category`
- `excerpt`
- `hero_image`
- `body`
- `read_time`
- `published_at`
- `related_service`

### Project

Fields:
- `title`
- `slug`
- `service`
- `location`
- `summary`
- `hero_image`
- `gallery`
- `before_image`
- `after_image`
- `featured`

## Reusable Blocks

### `hero_section`

Fields:
- `eyebrow`
- `title`
- `text`
- `image`
- `primary_cta_label`
- `primary_cta_href`
- `secondary_cta_label`
- `secondary_cta_href`

### `service_cards`

Fields:
- `eyebrow`
- `title`
- `text`
- `items`: nested cards with title, text, image, href, cta label

### `feature_section`

Fields:
- `eyebrow`
- `title`
- `text`
- `image`
- `image_position`

### `testimonial_grid`

Fields:
- `eyebrow`
- `title`
- `items`: testimonial references or nested testimonial cards

### `cta_band`

Fields:
- `eyebrow`
- `title`
- `text`
- `cta_label`
- `cta_href`

## Publishing Flow

When Storyblok is connected, publishing should trigger the hosting provider's deploy hook so the Astro site rebuilds automatically.
