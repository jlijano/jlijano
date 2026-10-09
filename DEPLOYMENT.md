# Deployment and Rollback

## Current known configuration
The HTML canonical URL is `https://jlijano.github.io/jlijano/`, suggesting GitHub Pages hosting. The repository default branch is `main`. **Actual Pages configuration, workflows, branch protection, and publication triggers have not been independently verified.** Check repository Settings → Pages and Actions before changing deployment settings.

## Release workflow
1. Review the scoped diff and record intended behavior/acceptance criteria.
2. Complete relevant checks in `TESTING.md`; record failures and explicit risk acceptance.
3. Preserve the last-known-good commit SHA; keep changes small and reversible.
4. Commit with a meaningful message; follow the approved branch/review process.
5. Confirm the publishing job or Pages deployment completed (if configured).
6. Visit the live site and smoke-test mobile navigation, portfolio sections, carousel, CV/contact links, form behavior, asset loading, and browser console/network errors.
7. Report **commit pushed**, **deployment complete**, and **production verified** as distinct states.

## Rollback
For a faulty static release, revert the offending commit (preferred for shared branches) or redeploy the last approved artifact using the actual hosting configuration. Avoid destructive force pushes. Re-test after rollback and document the incident.

## No unverified claims
Never report success merely because GitHub accepted a commit; production checks require access to the published site and observable results.
