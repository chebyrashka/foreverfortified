# Forever Fortified Homepage Figma Conversion Spec

Target Figma file:

- File: `Forever Fortified`
- File key: `zSgNclZUGoCajIaT3L07qB`
- Provided node: `68:2`
- Source page: `src/components/pages/HomePage.vue`
- Source tokens: `src/styles/tokens.css`

Note: The Figma connector timed out while reading node `68:2`, so this spec is built from the Astro/Vue source. It is intended to recreate the homepage as native Figma frames, text layers, components, and reusable styles.

## Frames

Create these top-level frames:

- `Homepage / Desktop`
  - Width: `1440`
  - Layout: vertical auto layout
  - Fill: `Warm White`
- `Homepage / Mobile`
  - Width: `390`
  - Layout: vertical auto layout
  - Fill: `Warm White`

Desktop is the primary frame. Mobile can follow after the desktop layout is approved.

## Design Tokens

### Colors

- `Iron Charcoal`: `#1F2421`
- `Graphite`: `#363A36`
- `Deep Forest`: `#2F4A3D`
- `Copper`: `#B86A3D`
- `Copper Dark`: `#934F2D`
- `Warm White`: `#F7F3EC`
- `Soft Stone`: `#D8D2C7`
- `Stone Light`: `#ECE7DD`
- `White`: `#FFFFFF`
- `Black`: `#101311`

### Typography

Preferred Figma styles:

- `Display / Hero`
  - Family: Sora or Manrope
  - Size: `104`
  - Line height: `95`
  - Weight: `900`
  - Letter spacing: `0`
- `Display / Section`
  - Family: Sora or Manrope
  - Size: `56`
  - Line height: `56`
  - Weight: `800`
  - Letter spacing: `0`
- `Heading / Card`
  - Family: Sora or Manrope
  - Size: `22`
  - Line height: `26`
  - Weight: `800`
  - Letter spacing: `0`
- `Body / Large`
  - Family: Inter or Atkinson Hyperlegible
  - Size: `20`
  - Line height: `30`
  - Weight: `400`
  - Letter spacing: `0`
- `Body / Default`
  - Family: Inter or Atkinson Hyperlegible
  - Size: `16`
  - Line height: `24`
  - Weight: `400`
  - Letter spacing: `0`
- `Label / Eyebrow`
  - Family: Sora or Manrope
  - Size: `13`
  - Line height: `18`
  - Weight: `800`
  - Letter spacing: `0`
  - Text case: uppercase
- `Quote / Testimonial`
  - Family: Newsreader or Georgia
  - Size: `26`
  - Line height: `31`
  - Weight: `400`
  - Letter spacing: `0`

### Spacing

- Page gutter: `40`
- Desktop content width: `1180`
- Wide content width: `1360`
- Section vertical padding: `96`
- Card gap: `20`
- Card padding: `24`
- Button height: `48`
- Radius small: `6`
- Radius medium: `8`

### Effects

- `Shadow / Soft`: `0, 18, 45, rgba(31, 36, 33, 0.12)`
- `Shadow / Strong`: `0, 28, 70, rgba(31, 36, 33, 0.22)`

## Reusable Components

### Header

Frame:

- Width: `1440`
- Height: `78`
- Horizontal auto layout
- Padding left/right: `40`
- Background: `Warm White` at `94%`
- Bottom border: `rgba(31, 36, 33, 0.10)`

Children:

- Brand lockup
  - Mark: `44x44`, radius `6`, fill `Iron Charcoal`, text `FF`
  - Text: `Forever Fortified`, small line `Built to hold up`
- Navigation
  - Services trigger
  - Articles
  - About
- Actions
  - Phone: `(555) 013-4427`
  - Primary button: `Request Estimate`

### Button / Primary

- Height: `48`
- Horizontal padding: `18`
- Radius: `6`
- Fill: `Copper`
- Text: `White`, `Label / Eyebrow` without uppercase requirement
- Optional arrow icon

### Button / Secondary

- Height: `48`
- Horizontal padding: `18`
- Radius: `6`
- Fill: `Warm White` at `74%`
- Stroke: `rgba(31, 36, 33, 0.26)`
- Text: `Iron Charcoal`
- Optional arrow icon

### Service Card

- Width: `380`
- Radius: `8`
- Fill: `White`
- Stroke: `rgba(31, 36, 33, 0.10)`
- Shadow: `Soft`
- Image: aspect ratio `4:3`
- Body padding: `24`

Content slots:

- Image
- Title
- Summary
- 3 highlights
- Text link CTA

### Testimonial Card

- Width: `380`
- Min height: `320`
- Radius: `8`
- Fill: `White`
- Stroke: `rgba(31, 36, 33, 0.10)`
- Padding: `24`

Content slots:

- Quote
- Name
- Service/location metadata

### Article Card

- Width: `380`
- Radius: `8`
- Fill: `White`
- Stroke: `rgba(31, 36, 33, 0.10)`
- Image: aspect ratio `16:10`
- Body padding: `24`

## Desktop Homepage Layout

### 1. Header

Use the Header component above.

### 2. Hero

Frame:

- Width: `1440`
- Height: `822`
- Position: below header
- Fill: `Iron Charcoal`
- Background image: current roof image from WordPress source, cropped cover
- Overlay:
  - Left-to-right gradient from `rgba(16, 19, 17, 0.88)` to `rgba(16, 19, 17, 0.18)`
  - Bottom gradient from `rgba(16, 19, 17, 0.68)` to transparent

Content frame:

- Width: `1360`
- Padding top: `120`
- Padding bottom: `32`
- Align bottom
- Vertical gap: `40`

Copy:

- Eyebrow: `Roofing. Siding. Bathroom remodels.`
- H1: `Exterior and remodeling work built to hold up.`
- Body: `Forever Fortified helps homeowners improve, protect, and refresh their homes with roofing, siding, and bathroom remodel services designed for long-term value.`
- Buttons:
  - `Request a Free Estimate`
  - `Explore Services`

Hero proof strip:

- Width: `1360`
- Height: `112`
- Three columns
- Border: `rgba(255,255,255,0.18)`
- Fill: `rgba(255,255,255,0.12)`
- Each cell fill: `rgba(16,19,17,0.42)`

Cells:

- `3` / `Core home improvement specialties`
- `01` / `Clear next step from estimate to walkthrough`
- `FF` / `Built around durable, practical recommendations`

### 3. Trust Strip

Frame:

- Width: `1440`
- Height: `78`
- Fill: `Warm White`
- Four equal columns
- Top/bottom border: `rgba(31, 36, 33, 0.10)`

Items:

- `Locally focused`
- `Free estimates`
- `Roofing, siding, bathrooms`
- `Practical project guidance`

### 4. Services

Frame:

- Width: `1440`
- Fill: `Warm White`
- Padding top/bottom: `112`

Container:

- Width: `1180`

Heading:

- Eyebrow: `Core specialties`
- H2: `Start with the part of your home that needs attention most.`
- Body: `Each service page is designed to help homeowners understand the work, the options, and the next clear step.`

Cards:

- Three columns
- Gap: `20`

Card 1:

- Title: `Roofing`
- Summary: `From inspections and repairs to full replacement, Forever Fortified helps homeowners protect the structure that protects everything else.`
- Highlights: `Roof inspections`, `Repairs and replacement`, `Storm-ready materials`
- CTA: `Explore Roofing`

Card 2:

- Title: `Siding`
- Summary: `Refresh curb appeal, improve durability, and reduce maintenance with siding work that gives the whole exterior a cleaner, stronger presence.`
- Highlights: `Exterior refresh`, `Weather resistance`, `Trim and detail work`
- CTA: `Explore Siding`

Card 3:

- Title: `Bathroom Remodel`
- Summary: `Bring comfort, function, storage, and polish into one of the most-used rooms in the home with remodel work built around daily life.`
- Highlights: `Walk-in showers`, `Tile and fixtures`, `Storage and layout`
- CTA: `Explore Bathrooms`

### 5. Why Forever Fortified

Frame:

- Width: `1440`
- Fill: `Stone Light`
- Padding top/bottom: `112`

Container:

- Width: `1180`
- Two columns
- Gap: `80`

Left:

- Eyebrow: `Why Forever Fortified`
- H2: `Built around the details homeowners notice.`

Right:

- Body: `The design should make the company feel specific: sturdy recommendations, clean communication, and work that respects the home before, during, and after the project.`
- Four small proof blocks in a two-column grid:
  - `Weather-ready thinking`
  - `Cleaner project communication`
  - `Materials matched to long-term value`
  - `Respect for the finished home`

Proof blocks:

- Fill: `rgba(255,255,255,0.60)`
- Left border: `3px Copper`
- Padding: `16`

### 6. Project Spotlight

Frame:

- Width: `1440`
- Fill: `Warm White`
- Padding top/bottom: `112`

Container:

- Width: `1360`
- Two columns
- Image: `880x520`
- Copy panel: `480x520`, fill `Deep Forest`

Copy:

- Eyebrow: `Siding and exterior detail`
- H2: `Exterior refresh with a stronger first impression`
- Body: `A focused exterior update can change how a home feels from the curb while adding better long-term protection from weather and wear.`
- Metadata: `Minnesota`
- Button: `View Recent Work`

### 7. Testimonials

Frame:

- Width: `1440`
- Fill: `Stone Light`
- Padding top/bottom: `112`

Heading:

- Centered
- Eyebrow: `Homeowner proof`
- H2: `The kind of work people are comfortable recommending.`

Cards:

- Three columns
- Gap: `20`

Quotes:

- `The communication was clear from the first estimate, and the finished work made the whole house feel cared for again.`
- `They helped us understand the options without pushing us into the most expensive route. That mattered.`
- `The remodel made our bathroom easier to use every day, but it also finally feels like it belongs with the rest of the home.`

### 8. Process

Frame:

- Width: `1440`
- Fill: `Warm White`
- Padding top/bottom: `112`

Heading:

- Eyebrow: `Process`
- H2: `A clear path from first call to final walkthrough.`

Step grid:

- Four equal columns
- Cell min height: `250`
- Cell fill: `White`
- Divider: `rgba(31,36,33,0.12)`

Steps:

- `01` / `Request an estimate` / `Share the project type, location, and what you want to solve.`
- `02` / `Walk the home` / `Review the existing condition, priorities, options, and constraints.`
- `03` / `Get a clear proposal` / `Understand scope, materials, timing, and what happens next.`
- `04` / `Build with care` / `Complete the work with respect for the home and a final walkthrough.`

### 9. Articles

Frame:

- Width: `1440`
- Fill: `Warm White`
- Padding top/bottom: `112`

Heading:

- Left group:
  - Eyebrow: `Homeowner guides`
  - H2: `Helpful reading before you start a project.`
- Right button: `Read Articles`

Cards:

- Three columns
- Article card component

Articles:

- `Roofing · 5 min read` / `How to know when your roof needs more than a repair`
- `Siding · 4 min read` / `What to consider before replacing siding`
- `Bathroom Remodel · 6 min read` / `Bathroom remodel choices that improve daily comfort`

### 10. Final CTA

Frame:

- Width: `1440`
- Fill: `Iron Charcoal`
- Padding top/bottom: `80`

Container:

- Width: `1180`
- Horizontal layout
- Left text
- Right button

Copy:

- Eyebrow: `Start here`
- H2: `Ready to fortify your home?`
- Body: `Tell us what you are planning and we will help you take the next clear step.`
- Button: `Request a Free Estimate`

### 11. Footer

Frame:

- Width: `1440`
- Fill: `Iron Charcoal`
- Padding top: `80`
- Top border if needed: `rgba(255,255,255,0.12)`

Use the footer from `src/components/site/SiteFooter.vue`.

## Image Placeholders

Use these images for the first Figma pass:

- Hero/Roofing: `https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png`
- Siding: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80`
- Bathroom: `https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80`
- Project: `https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80`

Real project photography should replace these before final design approval.

## Mobile Notes

For `390px` mobile:

- Header height: `68`
- Collapse navigation into menu button
- Hero height: roughly `720`
- Hero proof strip: one column
- Trust strip: one column
- Service cards: one column
- Why proof blocks: one column
- Project spotlight: image above copy
- Testimonials: one column
- Process: one column
- Articles: one column
- CTA: stacked text and button

## Figma Build Priority

Build in this order:

1. Tokens and text styles
2. Header and buttons
3. Desktop homepage wrapper
4. Hero
5. Trust strip
6. Service cards
7. Why section
8. Project spotlight
9. Testimonials
10. Process
11. Articles
12. Final CTA and footer
13. Mobile frame
