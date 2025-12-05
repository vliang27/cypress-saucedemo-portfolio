# Test Strategy — Cypress Saucedemo Portfolio


## Objective
Show a robust, maintainable automation framework covering common quality needs (UI, API, accessibility, component tests) while demonstrating leadership-level design decisions.


## Test Pyramid
- Unit / component tests (fast) — base for UI components
- API tests (contract / smoke checks) — medium speed
- E2E / UI tests (critical user journeys) — slower, run in CI with selective coverage


## Key Practices
- Page Object Model to isolate selectors and reuse flows
- Fixtures and custom commands for test data and reuse
- a11y checks on major pages using cypress-axe
- CI quality gates: failing tests block merges; artifacts captured
- Tests marked with tags (smoke, regression) for selective runs


## Coverage Goals
- Smoke flows in CI: login, add-to-cart, checkout happy path
- Accessibility: high-level a11y checks on home and checkout


## Risks and Mitigation
- Flaky tests: use stable selectors, network stubbing where appropriate
- Rate limits on public demo site: avoid heavy parallel runs against public site; use mocks if scaling


## Scaling
- Extract shared logic into `support/` and POMs
- Use Cypress Cloud or parallel runners for large suites
- Add component tests to ensure UI units are stable