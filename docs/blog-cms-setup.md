# Blog CMS Setup

Blog posts are set up to use Storyblok as the editor-friendly CMS.

The current site still builds statically on Netlify. At build time, `src/cms/articles.ts` fetches published Storyblok articles when `STORYBLOK_DELIVERY_API_TOKEN` is configured. If Storyblok is not configured yet, the site falls back to the local JSON entries in `src/cms/articles/` so local development stays reliable.

Articles are used by:

- `/articles/`
- `/articles/[slug]/`
- the homepage article preview when enabled

## Storyblok Setup

Create a Storyblok space for Forever Fortified and add an `Article` content type.

Recommended folder:

- `articles`

Recommended Article fields:

- `title`: Text
- `category`: Single-option field with `Roofing`, `Siding`, `Gutters`, `Bathroom Remodel`
- `read_time`: Text, for example `8 min read`. Optional; the site calculates reading time automatically when this is blank.
- `sort_order`: Number
- `excerpt`: Textarea
- `hero_image`: Asset
- `intro`: Textarea
- `sections`: Blocks field using an `Article Content` nestable block
- `closing`: Textarea

Recommended Article Content block fields:

- `content`: Richtext

## Article Fields

Storyblok fields are normalized to this site shape:

- `slug`: URL segment, for example `roof-revitalization-minnesota-home`
- `title`: page title and article card title
- `category`: currently `Roofing`, `Siding`, `Gutters`, or `Bathroom Remodel`
- `readTime`: display text, for example `8 min read`. Storyblok `read_time` overrides the automatic calculation.
- `sortOrder`: lower numbers appear first on article lists
- `excerpt`: meta description and card summary
- `image`: public image path, for example `/images/service-photos/photo-bg-roof.jpg`
- `intro`: opening paragraphs
- `sections`: article body sections
- `closing`: closing paragraphs

Each section supports:

- `title`
- `paragraphs`
- `bullets` when the section needs a list

When Storyblok uses the `Article Content` richtext block, the adapter converts:

- Richtext headings into article section headings
- Richtext paragraphs into article paragraphs
- Richtext bullet/numbered lists into article bullets

Category values are normalized to display labels. For example, stored values like `roofing` or `bathroom-remodel` display as `Roofing` and `Bathroom Remodel`.

Reading time is calculated at roughly 200 words per minute from intro text, richtext body content, section headings, bullets, and closing text when no `read_time` field is provided.

## Environment Variables

Add these environment variables in Netlify:

- `STORYBLOK_DELIVERY_API_TOKEN`: Storyblok published content delivery token
- `STORYBLOK_REGION`: `eu`
- `STORYBLOK_VERSION`: `published`
- `STORYBLOK_ARTICLES_PATH`: `articles/`

Local development can use the same variables in an uncommitted `.env` file.

## Publish Flow

1. Editor creates or edits an Article in Storyblok.
2. Editor clicks Publish.
3. Storyblok sends a webhook request to a Netlify build hook.
4. Netlify rebuilds the static site.
5. The updated article is live after the deploy completes.

## Netlify Build Hook

In Netlify:

1. Go to Site configuration.
2. Go to Build & deploy.
3. Create a Build hook for the production branch.
4. Copy the generated build hook URL.

In Storyblok:

1. Go to Settings.
2. Go to Webhooks.
3. Add the Netlify build hook URL.
4. Trigger it on publish and unpublish events.

## Local Fallback Posts

Local JSON posts are still useful as a backup and development fallback.

1. Create a new JSON file in `src/cms/articles/`.
2. Use the post slug as the filename, for example `winter-roof-maintenance.json`.
3. Set `sortOrder` to control where it appears in article lists.
4. Run `npm run build` to confirm the new static route is generated.

## Storyblok Mapping

The current JSON fields mirror the planned Storyblok `Article` model:

- `title` -> `title`
- `slug` -> `slug`
- `category` -> `category`
- `excerpt` -> `excerpt`
- `image` -> `hero_image`
- `readTime` -> `read_time`
- `intro` -> `intro`
- `sections[].content` -> article body sections
- `closing` -> `closing`

The article adapter already supports Storyblok and local fallback content. Future work can use the same pattern for services, projects, testimonials, and global site copy.
