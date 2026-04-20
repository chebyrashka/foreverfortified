# Figma Import Notes

Direct canvas writing was not available in the current connector run because metadata, screenshot, and design-context reads timed out against the provided Figma nodes.

Tested nodes:

- `68:2`
- `68:3`

Use `docs/figma-homepage-conversion-spec.md` as the authoritative source for recreating the current Astro homepage in the Figma file:

https://www.figma.com/design/zSgNclZUGoCajIaT3L07qB/Forever-Fortified?node-id=68-2

Metadata reads now work after reconnecting Figma as `kyle@sandstrom.design`, but this Codex session still does not expose a direct Figma canvas write tool.

As a bridge, a local Figma development plugin has been created:

- `figma/homepage-builder-plugin/manifest.json`
- `figma/homepage-builder-plugin/code.js`

Import that manifest in Figma to build the homepage as editable native frames on the current page.

When direct Figma writes are available, the conversion should create native frames and components rather than importing a flat image.

Recommended Figma structure:

- Page: `Website Redesign`
- Frame: `Homepage / Desktop`
- Frame: `Homepage / Mobile`
- Component group: `Website Components`
- Style group: `Forever Fortified Tokens`

The desktop frame should be built first and used as the source of truth for Astro tuning.
