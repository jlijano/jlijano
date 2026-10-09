# Architecture — Portfolio Website

Status: observed baseline from repository files; verify before each major change.

## Current architecture
This repository hosts a static public portfolio. `index.html` contains primary page markup, section anchors, SEO metadata and structured data. Styles are linked as multiple standalone CSS files (including `style.css` and several feature/override stylesheets). Browser-side behavior is loaded through defer scripts including `script.js`, `experience-wheel.js`, `project-carousel.js`, and `tools-marquee.js`. Local artwork and the CV are referenced from `assets/`. External fonts and image URLs also appear in page markup.

## Logical boundaries
- **Content/semantics:** HTML page sections, text, labels, accessibility metadata.
- **Presentation:** CSS, responsive rules, typography, motion/focus states.
- **Interactions:** JavaScript event handlers, form validation, carousel, navigation, effects.
- **External dependencies:** Google Fonts, remotely hosted visual assets, external social links; check availability/privacy implications.
- **Hosting:** Canonical URL currently points to `https://jlijano.github.io/jlijano/` (GitHub Pages); verify repository Pages settings before documenting actual publishing automation.

## Design rules
Keep progressive enhancement, use semantic HTML and unobtrusive JS, separate concerns, prefer existing modules over duplicate behavior, and minimize stylesheet override cascades. Document reasons for major structure changes in `docs/DECISIONS/`.

## Data/API boundaries
No application database or authenticated backend was established by the inspected HTML. Contact form delivery mechanism requires direct inspection of `script.js` before claiming any server-side integration. Document future integrations in `docs/API.md` and `docs/DATABASE.md` only when implemented.
