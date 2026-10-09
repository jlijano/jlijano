# API and External Integration Inventory

## Current status
The inspected HTML references external web resources and profile links. No first-party backend API was established by this documentation audit. Contact form implementation in `script.js` must be inspected and its actual delivery/fallback behavior documented before changing the form.

## Integration register (complete when verified)
| Integration | Purpose | Source/entry point | Authentication | Failure behavior | Owner |
| --- | --- | --- | --- | --- | --- |
| Google Fonts | Typography | `index.html` external stylesheet | None in page | Browser fallback font | Site maintainer |
| External imagery | Portfolio presentation | Remote URLs in `index.html` | None in page | Image may not load | Site maintainer |
| Contact form | Visitor contact | `index.html`, `script.js` | To verify | To verify | Site maintainer |

For each future API, record version, endpoint, input/output contract, authentication, rate limits, retries/timeouts, ownership, security classification, and contract tests. Never publish credentials.
