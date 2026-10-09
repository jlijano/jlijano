# Coding Standards — AI-Assisted Engineering

Version 1.0 | 2026-10-09 | Applies to this repository and serves as a reusable policy for related projects when separately adopted.

## Operating principle
**Plan → Audit → Design → Implement → Test → Review → Deploy → Verify → Document.** AI can draft and execute scoped changes; the human owner controls product requirements, architecture, security decisions, and acceptance.

## Required workflow
1. Inspect the repository, existing implementation, issue, and dependency implications first.
2. Define business outcome, constraints, non-goals, acceptance criteria, and test plan before coding.
3. Choose the simplest maintainable architecture; avoid unnecessary frameworks or duplicated logic.
4. Implement small, reviewable, reversible changes; preserve stable interfaces and user data.
5. Test success cases, negative/error cases, boundaries, keyboard/mobile behavior, and regressions.
6. Inspect changes for security, accessibility, responsiveness, performance, and maintainability.
7. Commit descriptive, scoped changes; follow repository branch policy and have a rollback plan.
8. Verify deployed behavior independently; document evidence, blockers, residual risks and decisions.

## Code conventions
- Prefer readable names and modular functions; avoid magic constants and implicit global dependencies.
- Separate content, presentation, UI behavior and any future business/data layer.
- Validate user input; encode untrusted content for its output context; never expose secrets in client assets.
- Prefer explicit errors and accessible status messaging to silent failures or misleading success messages.
- Use semantic HTML, labels, focus styles, reduced-motion support, and responsive CSS.
- Minimize external resources and preserve performance on mobile networks.
- Avoid cosmetic-only fixes for functional/backend defects; trace root cause.
- Do not ship nonfunctional controls, stubbed workflows masquerading as real features, or unverified integration claims.

## AI agent instructions
Report exactly what was inspected, changed, tested, deployed, and *not* verified. Never describe a commit as a production fix without deployment confirmation. Do not overwrite unrelated work or change production data without explicit authorization.

## Definition of done
Requirements satisfied; architecture respected; security/privacy preserved; relevant automated and manual tests pass; regression and performance risks evaluated; documentation updated; deployment verified if applicable; residual risks disclosed.

See `TESTING.md`, `SECURITY.md`, and `DEPLOYMENT.md` for actionable gates.
