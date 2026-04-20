# Forever Fortified

Astro + Vue frontend scaffold for the Forever Fortified website redesign, prepared for Storyblok as the external CMS.

## Stack

- Astro for routing, layouts, static output, and Storyblok wrapper components
- Vue for reusable visual components and page sections
- Storyblok for future CMS-managed content
- CSS custom properties in `src/styles/tokens.css` for design tokens

## Local Setup

Use Node 22.12 or newer:

```sh
nvm use
npm install
npm run dev
```

Production build:

```sh
npm run build
```

## Design Tokens

Edit `src/styles/tokens.css` to adjust colors, typography, spacing, radii, shadows, and layout widths.

`src/styles/global.css` imports the token file and defines shared global utility styles.

Preview-only palette/type overrides live in `src/styles/theme-options.css`.

## Local CMS Content

Global business content lives in `src/cms/global.json` for now. Use it for shared brand, phone, email, service area, hours, and social URL values until Storyblok is connected.

## Storyblok

Copy `.env.example` to `.env` and add the Storyblok delivery token when the space is ready:

```sh
PUBLIC_SITE_URL=https://foreverfortified.com
STORYBLOK_DELIVERY_API_TOKEN=
STORYBLOK_REGION=us
```

The Storyblok component wrappers live in `src/storyblok`. They preserve Storyblok editability and pass normalized content into Vue components in `src/components/blocks`.
