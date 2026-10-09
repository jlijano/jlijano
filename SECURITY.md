# Security and Privacy Standards

## Baseline controls
- Treat all form entries, URL parameters, and external data as untrusted; validate inputs and use safe DOM APIs (e.g. textContent for plain text).
- Never commit API keys, passwords, tokens, private information, or real customer data. Use approved secret storage for any future service.
- Do not put private information into public site assets, telemetry, error logs, or client-side bundles.
- Validate external links, use `rel="noopener noreferrer"` with target=_blank, and review third-party fonts/images/scripts for availability, privacy, and security.
- Maintain accessible, honest errors and preserve transport security (HTTPS).
- Do not claim a contact request was transmitted without confirmed delivery or an accurately described client-side fallback.
- Review dependencies before introducing them; prefer minimal dependencies and pin/upgrade responsibly.

## If a backend is added
Require threat modeling, authenticated routes where appropriate, server-side authorization and validation, rate limiting, abuse prevention, secure headers/CSP, least-privilege credentials, logging without secrets, retention rules, and managed backups. Do not consider front-end checks equivalent to server-side security.

## Review gate
For each change, check injection/XSS, exposed secrets, unsafe navigation, dependency provenance, data leakage, form abuse, and security impact of new third-party integrations. Record findings and owner-approved exceptions.

## Vulnerability handling
Do not publish vulnerability details or credentials in issues. Triage severity, mitigate, verify, and document remediation privately when warranted.
