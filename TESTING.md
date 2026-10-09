# Testing and Quality Gates

## Minimum tests per change
1. **Static checks:** validate edited HTML/CSS/JS using tools available in the environment. For affected JavaScript, `node --check <file>` when Node is available.
2. **Functional:** navigation anchors, mobile menu, contact form validation/status, project carousel, links, CV, and interactive controls relevant to the diff.
3. **Responsive:** small phone, tablet, desktop; landscape and reduced-motion where meaningful.
4. **Accessibility:** keyboard navigation, visible focus, descriptive labels, image alt text, semantic headings and landmarks, screen-reader status messaging.
5. **Negative scenarios:** blank/malformed form fields, missing network resources, broken links, slow loading and unexpected actions.
6. **Regression:** unaffected sections and prior working flows remain operational.
7. **Security/performance:** exposed secrets, unsafe DOM injection, third-party links, oversized assets, layout shift, and JS errors.

## Execution
No established npm test/build workflow was confirmed during initial documentation audit. Do not claim such commands exist until inspecting repository tooling. Record exact commands, outputs, pass/fail results, date, and environment. Manual browser checks are required for visual and interaction issues.

## Release gate
Block release for known critical security issues, broken main navigation/contact pathway, failed required tests, or unreviewed data-handling changes unless the owner formally accepts a documented exception. Distinguish tests run from tests planned.

## Definition-of-done evidence template
Change/commit; tested revision; commands/results; devices/browsers; affected flows; known failures; deployment URL; production smoke test; reviewer/approval.
