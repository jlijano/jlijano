# Requirements — Portfolio Website

Status: living baseline. Last reviewed: 2026-10-09.

## Purpose
Present professional experience, projects, capabilities, and reliable contact pathways through the public personal portfolio at `https://jlijano.github.io/jlijano/`.

## Existing functional scope
- Responsive landing page with Home, Projects, About, Tools, Clients, Experience, and Contact sections.
- Project carousel, experience presentation, external social profiles, CV link, and contact form.
- Accessible navigation and clear interaction states across desktop and mobile.

## Acceptance criteria for changes
1. All primary navigation destinations resolve to the intended section.
2. Mobile navigation opens, closes, and remains keyboard accessible.
3. Projects and carousel controls work with mouse, touch, and keyboard as applicable.
4. Contact form validates required fields, communicates errors and success/failure accurately, and never claims a message was delivered unless verified.
5. Images, local assets, CV link, and external links resolve.
6. Layout works at representative small-phone, tablet, and desktop widths without unwanted horizontal overflow.
7. Semantic landmarks, descriptive alternatives, focus indicators, and reduced-motion preferences are maintained.
8. Changes do not degrade security, privacy, or page performance.

## Change request template
Business problem; user story; affected pages; assumptions/constraints; non-goals; dependencies; acceptance criteria; testing evidence; rollback approach; owner/approval.

## Non-goals
Do not introduce authentication, databases, API services, or a build framework without an approved requirement and architectural decision.
