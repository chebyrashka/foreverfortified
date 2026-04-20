# Forever Fortified Homepage Builder

This local Figma plugin builds the current Astro homepage direction as editable native Figma frames.

## How to Run

1. Open the target Figma file.
2. Go to `Plugins` → `Development` → `Import plugin from manifest...`.
3. Select `figma/homepage-builder-plugin/manifest.json`.
4. Run `Forever Fortified Homepage Builder`.

The plugin creates:

- Local color and text styles
- A `Homepage / Desktop` frame
- Editable sections for header, hero, trust strip, services, why, project spotlight, testimonials, process, articles, CTA, and footer

Remote images are represented as editable image placeholders with source URLs in layer names. Replace them with real project photography inside Figma.

## Troubleshooting

If Figma still reports an error:

1. Re-run the plugin from `Plugins` → `Development`, not from the recent plugin shortcut.
2. If it still fails, remove the development plugin and import `manifest.json` again.
3. Copy the exact error text from Figma and send it back here.

The plugin intentionally avoids remote image loading, local style creation, and newer side-specific stroke APIs so it can run in more Figma environments.
